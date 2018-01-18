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
		?<div class="content-wrapper">
			<div class="yellow">有效期</div>
			<div class="validaty">
			 	{formatTime((new Date(this.props.data.validity.startTime-0)),'yyyy-MM-dd')}
			 	&nbsp;至&nbsp;{formatTime((new Date(this.props.data.validity.endTime-0)),'yyyy-MM-dd')}
			</div>
			<div class="yellow">有效期</div>
			<div class="use-text">
			 	{this.props.data.time}
			</div>
			<div class="yellow">使用规则</div>
			<ul class="tips">
				{
					this.props.data.rules.map((item,i) => {
						return (<li class="item" key={i}>
							{item}
						</li>)
					})
				}
			</ul>
		</div>
		:'加载中...';
		return (
			<div class="detail-notice">
				<div class="title border-1px">购买须知</div>
				{contentData}
			</div>
		)
	}
}

export default Notice;