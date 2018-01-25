import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class Cell extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		const styles = {
			color:this.props.iconColor?this.props.iconColor:'#1890FF'
		}
		return (
			<div class="cell-wrapper border-1px" onClick={this.clickHandle.bind(this)}>
			{
				this.props.to
				?<Link class="cell-content" to={this.props.to}>
					<div class="cell-left">
						<i style={styles} class={"iconfont "+(this.props.icon?this.props.icon:'')}></i>
					</div>
					<div class="cell-center">
						{this.props.title}
					</div>
					<div class="cell-right">
						<div class="text">
						{this.props.value?this.props.value:''}
						</div>
						{this.props.to?<i class="iconfont icon-arrow-right" ></i>:''}
					</div>
				</Link>
				:<div class="cell-content">
					<div class="cell-left">
						<i style={styles} class={"iconfont "+(this.props.icon?this.props.icon:'')}></i>
					</div>
					<div class="cell-center">
						{this.props.title}
					</div>
					<div class="cell-right">
						<div class="text">
						{this.props.value?this.props.value:''}
						</div>
						<i class="iconfont icon-arrow-right" ></i>
					</div>
				</div>
			}
				
			</div>
		)
	}
	
	clickHandle() {
		if(this.props.clickHandle){
			this.props.clickHandle()
		}
	}
	
}

Cell.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.string,
	icon: PropTypes.string,
	to: PropTypes.string,
	clickHandle: PropTypes.func
}

export default Cell;