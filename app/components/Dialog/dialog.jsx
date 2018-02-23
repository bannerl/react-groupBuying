import React from 'react';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} 
  from 'react-dom';
import './style.scss';
import Toast from '../Toast/toast';
class Dialog extends React.Component {
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
      <div>{this.props.children}</div>, 
      this.node 
    );
  }
}

export default Dialog;