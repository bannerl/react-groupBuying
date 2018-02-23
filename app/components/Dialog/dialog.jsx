import React from 'react';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} 
  from 'react-dom';
import './style.scss';
import Toast from '../Toast/toast';
class Dialog extends React.Component {
  render() {
    return null;
  }
//ReactDOM.unmountComponentAtNode(document.getElementById('example'));  销毁组件
  componentDidMount() {
    const doc = window.document;
    this.node = doc.createElement('div');
    this.node.style.display ='none';
    doc.body.appendChild(this.node);
    this.renderPortal(this.props);
  }
	
  componentDidUpdate() {
  	
  	if(this.props.visible){
  		this.node.style.display ='block';
  		setTimeout(() => {
  				this.node.style.display ='none';
  		},2000);
  	}else{
  		this.renderPortal(this.props);
  	}
    this.renderPortal(this.props);
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.node);
    window.document.body.removeChild(this.node);
  }

  renderPortal(props) {
    unstable_renderSubtreeIntoContainer(
      this, 
      <div>{this.props.children}</div>, 
      this.node 
    );
  }
}

export default Dialog;