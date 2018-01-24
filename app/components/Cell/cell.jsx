import React from 'react';
import { Link } from 'react-router';
import propTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class ListItem extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		const styles = {
			color:this.props.iconColor?this.props.iconColor:'#1890FF'
		}
		return (
			<div class="cell-wrapper border-1px">
				<Link class="cell-content" to={this.props.to?this.props.to:''}>
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
			</div>
		)
	}
	
}

ListItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	value: React.PropTypes.string,
	icon: React.PropTypes.string,
	to: React.PropTypes.string
}

export default ListItem;