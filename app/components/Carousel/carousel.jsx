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
	                <div class="item-wrapper">
	                	<ul>
	                		<Link to="/search/meishi"><div class="icon-wrapper"><i class="iconfont icon-meishi"></i></div><div class="text">美食</div></Link>
	                		<Link to="/search/jiudian"><div class="icon-wrapper"><i class="iconfont icon-jiudian"></i></div><div class="text">酒店</div></Link>
	                		<Link to="/search/chaoshi"><div class="icon-wrapper"><i class="iconfont icon-chaoshi"></i></div><div class="text">超市</div></Link>
	                		<Link to="/search/waimai"><div class="icon-wrapper"><i class="iconfont icon-waimai"></i></div><div class="text">外卖</div></Link>
	                		<Link to="/search/huoche"><div class="icon-wrapper"><i class="iconfont icon-huoche"></i></div><div class="text">火车</div></Link>
	                		<Link to="/search/dianying"><div class="icon-wrapper"><i class="iconfont icon-movie"></i></div><div class="text">电影</div></Link>
	                		<Link to="/search/car"><div class="icon-wrapper"><i class="iconfont icon-dache"></i></div><div class="text">出行</div></Link>
	                		<Link to="/search/song"><div class="icon-wrapper"><i class="iconfont icon-sang"></i></div><div class="text">ktv</div></Link>
	                		<Link to="/search/xiuxian"><div class="icon-wrapper"><i class="iconfont icon-xiuxian"></i></div><div class="text">休闲娱乐</div></Link>
	                		<Link to="/search/xiaochi"><div class="icon-wrapper"><i class="iconfont icon-xiaochi"></i></div><div class="text">小吃</div></Link>
	                	</ul>
	                </div>
	                <div class="item-wrapper">
	                	<ul>
	                		<Link to="/search/chaoshi"><div class="icon-wrapper"><i class="iconfont icon-chaoshi"></i></div><div class="text">超市</div></Link>
	                		<Link to="/search/xinshang"><div class="icon-wrapper"><i class="iconfont icon-tag"></i></div><div class="text">今日新上</div></Link>
	                		<Link to="/search/chaoshi"><div class="icon-wrapper"><i class="iconfont icon-chaoshi"></i></div><div class="text">超市</div></Link>
	                		<Link to="/search/waimai"><div class="icon-wrapper"><i class="iconfont icon-waimai"></i></div><div class="text">外卖</div></Link>
	                		<Link to="/search/huoche"><div class="icon-wrapper"><i class="iconfont icon-huoche"></i></div><div class="text">火车</div></Link>
	                		<Link to="/search/dianying"><div class="icon-wrapper"><i class="iconfont icon-movie"></i></div><div class="text">电影</div></Link>
	                		<Link to="/search/car"><div class="icon-wrapper"><i class="iconfont icon-dache"></i></div><div class="text">出行</div></Link>
	                		<Link to="/search/song"><div class="icon-wrapper"><i class="iconfont icon-sang"></i></div><div class="text">ktv</div></Link>
	                		<Link to="/search/xiuxian"><div class="icon-wrapper"><i class="iconfont icon-xiuxian"></i></div><div class="text">休闲娱乐</div></Link>
	                		<Link to="/search/all"><div class="icon-wrapper"><i class="iconfont icon-msnui-more"></i></div><div class="text">全部</div></Link>
	                	</ul>
	                </div>
	            </ReactSwipe>
	            
	            <div class="current-position">
	            	<span class={this.state.index === 0?'on':""}></span>
	            	<span class={this.state.index === 1?'on':""}></span>
	            </div>
			</div>
		)
	}
}

export default Carousel;