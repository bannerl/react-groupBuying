import React from 'react';
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class Toast extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			position:'middle',
			duration:3000,
			visible:false,
			message:'',
			time:0
		};
	}
	render () {
		let { icon, position, duration, visible} = this.props;
		
		position = position?position:this.state.position;
		duration = duration?duration:this.state.duration;
		
		return (
			<div className={'toast-wrapper '+(this.state.visible?'on':'')} >
				{this.props.children}
				<div className="content">
					<span>{this.state.message}</span>
				</div>
			</div>
		)
	}
	
	componentWillReceiveProps(e){
		console.log(e)
		let timer;
		if(e.message.length === 0){
			return;
		}
		
		console.log(this.props.message,e.message)
		console.log(e.message)
		
		if(this.props.message != e.message){
			console.log((new Date()).getTime() - this.state.time)
			if(!(new Date()).getTime() - this.state.time>e.duration){
				return;
			}
			this.setState({
				message:e.message,
				time: (new Date()).getTime()
			});
			this.setState({
				visible:true
			});
			timer = setTimeout(() => {
				this.setState({
					visible:false
				})
			},e.duration);
			return;
		}else{
			console.log((new Date()).getTime() - this.state.time)
			if(!(new Date()).getTime() - this.state.time>e.duration){
				return;
			}
			this.setState({
				time: (new Date()).getTime()
			});
		}
		
		this.setState({
			visible:true
		});
		timer = setTimeout(() => {
			this.setState({
				visible:false
			})
		},e.duration)
	}
}

Toast.propTypes = {
	message: PropTypes.string,
	icon: PropTypes.string,
	position: PropTypes.string,
	duration: PropTypes.number,
	show: PropTypes.bool
}

Toast.defaultProps = {
	message: '你的提示信息没有填写',
	icon: '',
	position: 'middle',
	duration: 3000
}


//export default Toast;



import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} 
  from 'react-dom';



export default function a(mes) {
	return class Dialog extends React.Component {
		proc(wrappedComponentInstance) {
	      wrappedComponentInstance.method()
	    }
	  render() {
	    return null;
	  }
	//ReactDOM.unmountComponentAtNode(document.getElementById('id'));  销毁组件
	  componentDidMount() {
	    const doc = window.document;
	    this.node = doc.createElement('div');
	    doc.body.appendChild(this.node);
	    this.renderPortal(this.props);
	  }
		
	  componentDidUpdate(a) {
	    this.renderPortal(this.props);
	  }
		
	  componentWillUnmount() {
	    unmountComponentAtNode(this.node);
	    window.document.body.removeChild(this.node);
	  }
	
	  renderPortal(props) {
	    unstable_renderSubtreeIntoContainer(
	      this, 
	      <div>
	      sdfdds
	      	<Toast message={mes}/>
	      </div>,
	      this.node 
	    );
	  }
	}	
}
