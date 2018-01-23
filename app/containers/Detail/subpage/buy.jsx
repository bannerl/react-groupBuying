import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import Abstract from '../../../components/DetailAbstract/abstract';
import * as UserInfoActionFromFile from '../../../actions/store';
import * as LocalStoreKey from '../../../config/localStoreKey';
import LocalStore from '../../../util/localStore'; 

class Buy extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			isLogin:false,
			isStore:false,
			id:''
			
		}
	};
	
	render() {
		const {data} = this.state;
		
		return (
			<div>
				<Abstract 
					isLogin={this.state.isLogin} 
					isStore={this.state.isStore} 
					data={this.props.data}
					collectionHandle={this.collectionHandle.bind(this)}
					buyClickHandle={this.buyClickHandle.bind(this)}
					/>
			</div> 
		);
	};
	//收藏
	collectionHandle () {
		if(this.state.isLogin) {
			if(this.state.isStore){
				this.props.UserInfoActions.rm({id:this.props.id});
				//保存到本地仓库
				this.savaStore('reduce')
			} else {
				this.props.UserInfoActions.add({id:this.props.id});
				//保存到本地仓库
				this.savaStore('add')
			}
			this.setState({
				isStore:!this.state.isStore
			})
		}else{
			this.goLogin()
		}
	}
	
	//购买
	buyClickHandle () {
		
	}
	
	//存到本地
	savaStore(param) {
		const id = this.props.id;
		let arr = LocalStore.get(LocalStoreKey.SHOPSSTORE);
		if(arr == null){
			arr = [];
			if(param === "add") {
				arr.push({id});
			}
		}else{
			if(param === "add") {
				arr.unshift({id});
			}else{
				arr.filter((item) => {
					if(id !== item.id){
						return item
					}
				})
			}
		}
		LocalStore.set(LocalStoreKey.SHOPSSTORE,arr);
	}
	
	componentDidMount () {
		//检验是否登录
		const isLogin = this.checkLogin()
		if(isLogin) {
			const store = this.props.store
			if(store) {
				let isStore = store.some((item) => {
					return (this.props.id == item.id)
				});
				
				this.setState({
					isStore
				})
				
			}
		}
		
	}
	//检查是登录
	checkLogin () {
		if(this.props.userInfos.userName) {
			this.setState({
				isLogin:true
			})
			return true
		} 
		return false
	}
	//跳转登录页面
	goLogin() {
		hashHistory.replace('/login/shop/1?id='+decodeURIComponent(this.props.id))
	}
}

	function mapStateToProps (state) {
		return {
			userInfos:state.userinfo,
			store:state.store
		}
	}
	
	function mapDispatchToProps (dispath) {
		return {
			UserInfoActions:bindActionCreators(UserInfoActionFromFile,dispath)
		}
	}

const BuyContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Buy)

export default BuyContainer;