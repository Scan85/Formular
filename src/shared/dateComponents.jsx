import React from "react";
import "babel-polyfill";

/*
* JSDOC Dokumentation Test
*
*/
export default class DefaultDate extends React.Component {
	
	constructor(props) {
		super(props);
		
	}

	propTypes = {
		datestring: React.PropTypes.string
	};

	componentDidMount() {}
	componentWillMount() {}
	componentDidUpdate(prevProps, prevState) {}

	formatDate(datestring) {
		let d = new Date(datestring);
		let options = { 
			year: 'numeric', 
			month: '2-digit', 
			day: '2-digit' 
		};
		return d.toLocaleDateString('de-DE', options);
	}

	render(){
		return(
			<span>this.formatDate(this.props.datestring)</span>
		);
	}
}

export class LongMonth extends React.Component {
	
	constructor(props) {
		super(props);
		
	}

	propTypes = {
		datestring: React.PropTypes.string
	};

	componentDidMount() {}
	componentWillMount() {}
	componentDidUpdate(prevProps, prevState) {}

	formatDate(datestring) {
		let d = new Date(datestring);
		let options = { 
			year: 'numeric', 
			month: 'long', 
			day: '2-digit' 
		};
		return d.toLocaleDateString('de-DE', options);
	}

	render(){
		return(
			<span>this.formatDate(this.props.datestring)</span>
		);
	}
}

export class ShortMonth extends React.Component {
	
	constructor(props) {
		super(props);
		
	}

	propTypes = {
		datestring: React.PropTypes.string
	};

	componentDidMount() {}
	componentWillMount() {}
	componentDidUpdate(prevProps, prevState) {}

	formatDate(datestring) {
		let d = new Date(datestring);
		let options = {
			year: 'numeric', 
			month: 'short', 
			day: '2-digit' 
		};
		return d.toLocaleDateString('de-DE');
	}

	render(){
		let datestring = new Date();
		return(
			<span>this.formatDate(this.props.datestring)</span>
		);
	}
}