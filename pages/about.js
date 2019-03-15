import React, { Component } from 'react';
import { connect } from "react-redux";
import { new_posts } from '../src/redux/actions/postActions'
// import console = require('console');
class about extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidMount() {
		// console.log("da", this.props)
		this.props.new_posts()
	}
	render() {
		return (
			<div>
				dad
	 		</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		recentdata: state
	};
}

export default connect(
	mapStateToProps,
	{ new_posts }
)(about);
