import React from 'react';
import {render}  from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory, Link, Route } from 'react-router';
import { getDetail } from '../../fetch/detail/detail';
import { loadUrl } from '../../util/util';
import Abstract from '../../components/DetailAbstract/abstract';
import PackageContent from '../../components/DetailPackage/packageContent';
import Notice from '../../components/DetailNotice/notice';
import NoMore from '../../components/NoMore/nomore';

class Home extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data:[]
		}
	};
	
	render() {
		const {data} = this.state;
		return (
			<div>
				<Abstract data={data} />
				<div style={{"height":".13rem","background":'#f5f5f5'}}></div>
				<PackageContent data={data.package} />
				<div style={{"height":".13rem","background":'#f5f5f5'}}></div>
				<Notice data={data.notice} />
				<NoMore />
			</div> 
		);
	};
	
	componentDidMount () {
		//获取路由参数
		var arr = window.location.href.split('/');
		var sellerId = arr[arr.length-1].split('?')[0];
		var obj = loadUrl(window.location.href);
		obj.sellerId = sellerId;
		
		//发送请求
		var result = getDetail(obj);
		
		//处理数据
		result.then((res)=>{
			return res.json()
		}).then((json)=>{
			if(json){
				this.setState({
					data:json
				})
			}
		})
	}
}

export default Home;