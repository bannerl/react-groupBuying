import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header/header';
import Toast from '../../components/Toast/toast';

class EditPassword extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};
	
	render() {
		return (
			<div>
				<Header onClick={this.clickHandle.bind(this)}  title="修改密码" />
				<Toast>
					<div>footer</div>
					<div onClick={this.clickHandle.bind(this)}>content</div>
					<div>name</div>
				</Toast>
			</div>
		);
	};
	clickHandle() {
		console.log(1)
		
	}
	componentDidMount() {
		
	}
}

export default EditPassword;