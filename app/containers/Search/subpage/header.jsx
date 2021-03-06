import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link,hashHistory } from 'react-router';
import InputBind from '../../../components/InputBind/input'; 
import LocalStore from '../../../util/localStore';
import { getSearchResult } from '../../../fetch/searchPage/searchpage';
import './style.scss';

class SearchInputPage extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			value:'',
			router:''
		}
	};
	
	render() {
		return (
			<div className="s-i-header">
				<div className="return" onClick={this.clickHandleReturn.bind(this)}>
					<i className="iconfont icon-fanhui"></i>
				</div>
				<div className="content">
					<InputBind 
						keyUpHandle={this.KeyUpHandle.bind(this)} 
						getVal={this.getValue.bind(this)}
						IsFocus 
						placeHolder="请输入关键字"
					/>
				</div>
				<div className="search-btn">
					<a className="text" onClick={this.clickHandle.bind(this)}>搜索</a>
				</div>
			</div>
		);
	};
	
	//返回
	clickHandleReturn () {
		if(this.props.router === 'index') {
			hashHistory.push('/')
		}
	}
	//获取input值
	getValue (val) {
		this.setState({
			value:val
		});
	}
	//键盘按下事件
	KeyUpHandle (val,e) {
		this.search(val,e)
	}
	
	//点击事件
	clickHandle () {
		let val = this.state.value;
		this.search(val)
	}
	//搜索事件
	search (value,e) {
		let val = value || null;
		let event = e || null;
		//判断是否为空
		if(val == null) {
			return;
		}
		
		//判断是键盘事件还是点击事件
		if(event) {
			if(event.keyCode !== 13) {
				return;
			}
		}
		let arr = [];
		
		if(LocalStore.get('historySearch') != null) {
			
			arr = LocalStore.get('historySearch');
		} 
		if(arr.indexOf(value) === -1) {
			arr.push(value);
		}
		LocalStore.set('historySearch',arr);
		hashHistory.push('/search/all/'+this.props.router+'?kwd='+encodeURIComponent(value));
	}
}

export default SearchInputPage;