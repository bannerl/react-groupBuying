import React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class SearchInput extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			inputState:false
		}
	}
	render () {
		return (
			<Link to={this.props.linkTo}>
				<div class="modal-search-input">
					请输入关键字
				</div>
			</Link>
		)
	}
}


export default SearchInput;