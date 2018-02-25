import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import './style.scss';

class Carousel extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			index:0
		}
	}
	
	currentPosition(i,ele) {
		if(i === 2){
			i = 0
		} else if(i===3){
			i = 1
		}
		this.setState({
			index:i
		})
	}
	
	render () {
		const carouselOptions = {
			speed: 400,
  			auto: 3500,
  			continuous: true,
  			callback:this.currentPosition.bind(this)
		};
		
		return (
			<div id="home-carousel">
				<ReactSwipe className="carousel" swipeOptions={carouselOptions}>
	                <div className="item-wrapper">
	                	<ul>
	                		<Link to="/shopsType/meishi"><div className="icon-wrapper"><i className="iconfont icon-meishi"></i></div><div className="text">美食</div></Link>
	                		<Link to="/shopsType/jiudian"><div className="icon-wrapper"><i className="iconfont icon-jiudian"></i></div><div className="text">酒店</div></Link>
	                		<Link to="/shopsType/chaoshi"><div className="icon-wrapper"><i className="iconfont icon-chaoshi"></i></div><div className="text">超市</div></Link>
	                		<Link to="/shopsType/waimai"><div className="icon-wrapper"><i className="iconfont icon-waimai"></i></div><div className="text">外卖</div></Link>
	                		<Link to="/shopsType/huoche"><div className="icon-wrapper"><i className="iconfont icon-huoche"></i></div><div className="text">火车</div></Link>
	                		<Link to="/shopsType/dianying"><div className="icon-wrapper"><i className="iconfont icon-movie"></i></div><div className="text">电影</div></Link>
	                		<Link to="/shopsType/car"><div className="icon-wrapper"><i className="iconfont icon-dache"></i></div><div className="text">出行</div></Link>
	                		<Link to="/shopsType/song"><div className="icon-wrapper"><i className="iconfont icon-sang"></i></div><div className="text">ktv</div></Link>
	                		<Link to="/shopsType/xiuxian"><div className="icon-wrapper"><i className="iconfont icon-xiuxian"></i></div><div className="text">休闲娱乐</div></Link>
	                		<Link to="/shopsType/xiaochi"><div className="icon-wrapper"><i className="iconfont icon-xiaochi"></i></div><div className="text">小吃</div></Link>
	                	</ul>
	                </div>
	                <div className="item-wrapper">
	                	<ul>
	                		<Link to="/shopsType/chaoshi"><div className="icon-wrapper"><i className="iconfont icon-chaoshi"></i></div><div className="text">超市</div></Link>
	                		<Link to="/shopsType/xinshang"><div className="icon-wrapper"><i className="iconfont icon-tag"></i></div><div className="text">今日新上</div></Link>
	                		<Link to="/shopsType/chaoshi"><div className="icon-wrapper"><i className="iconfont icon-chaoshi"></i></div><div className="text">超市</div></Link>
	                		<Link to="/shopsType/waimai"><div className="icon-wrapper"><i className="iconfont icon-waimai"></i></div><div className="text">外卖</div></Link>
	                		<Link to="/shopsType/huoche"><div className="icon-wrapper"><i className="iconfont icon-huoche"></i></div><div className="text">火车</div></Link>
	                		<Link to="/shopsType/dianying"><div className="icon-wrapper"><i className="iconfont icon-movie"></i></div><div className="text">电影</div></Link>
	                		<Link to="/shopsType/car"><div className="icon-wrapper"><i className="iconfont icon-dache"></i></div><div className="text">出行</div></Link>
	                		<Link to="/shopsType/song"><div className="icon-wrapper"><i className="iconfont icon-sang"></i></div><div className="text">ktv</div></Link>
	                		<Link to="/shopsType/xiuxian"><div className="icon-wrapper"><i className="iconfont icon-xiuxian"></i></div><div className="text">休闲娱乐</div></Link>
	                		<Link to="/shopsType/all"><div className="icon-wrapper"><i className="iconfont icon-msnui-more"></i></div><div className="text">全部</div></Link>
	                	</ul>
	                </div>
	            </ReactSwipe>
	            
	            <div className="current-position">
	            	<span className={this.state.index === 0?'on':""}></span>
	            	<span className={this.state.index === 1?'on':""}></span>
	            </div>
			</div>
		)
	}
}

export default Carousel;