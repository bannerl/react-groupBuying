import React from 'react';
import { render } from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';
import { formatTime } from '../../util/util';

class Notice extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		const data = this.props.data?data:{};
		var time =new Date();
		
		const contentData = this.props.data
		?<div className="content-wrapper">
			<div className="yellow">有效期</div>
			<div className="validaty">
			 	{formatTime((new Date(this.props.data.validity.startTime-0)),'yyyy-MM-dd')}
			 	&nbsp;至&nbsp;{formatTime((new Date(this.props.data.validity.endTime-0)),'yyyy-MM-dd')}
			</div>
			<div className="yellow">有效期</div>
			<div className="use-text">
			 	{this.props.data.time}
			</div>
			<div className="yellow">使用规则</div>
			<ul className="tips">
				{
					this.props.data.rules.map((item,i) => {
						return (<li className="item" key={i}>
							{item}
						</li>)
					})
				}
			</ul>
		</div>
		:'加载中...';
		return (
			<div className="detail-notice">
				<div className="title border-1px">购买须知</div>
				{contentData}
			</div>
		)
	}
}

export default Notice;