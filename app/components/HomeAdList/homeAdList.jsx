import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class HomeAdList extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data:[]
		}
	}
	render () {
		const data = this.props.data;
		data.map((item,i)=>{
			i = i+1;
			if(i/2 === 1) {
				return item.color = 'red'
			} else if (i/3 === 1) {
				return item.color = "blue"
			} 
			return item.color = "green"
		});
		
		return (
			<ul className="home-ad-wrapper" >
				{
					data.length
					?data.map((item,i)=>{
						return <Link className="border-1px-right" to={'/recommend?router='+item.path} key={i}>
							<li className="adver-item">
								<h4 className={'title '+item.color}>{item.title}</h4>
								<p className="description">{item.description}</p>
								<div className="image-wrapper">
									<img src={item.url} />
								</div>
							</li>
						</Link>
					})
					:<div className="loading">
						<img src='./image/homeAdBg.svg' />
					</div> 
				}
			</ul>
		)
	}
}

HomeAdList.propTypes = {
    data: PropTypes.array
}

export default HomeAdList;