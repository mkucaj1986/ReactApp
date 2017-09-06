import React from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";

import { getData } from "../actions/getData";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.isLoading = true;
	}
	componentWillMount() {
		console.log("this is called before render!");
	}

	componentDidMount() {
		this.props.getData();
	}
	render() {
		let data = null;
		if (this.isLoading) {
			data = <div>Loading...</div>;
		}
		if (this.props.dataLoaded) {
			data = <CartItem data={this.props.data} />;
			this.isLoading = false;
		}
		return (
			<div className="container">
				<h1>7 Ninja React App</h1>
				{data}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.getData.data,
		dataLoaded: state.getData.dataLoaded
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getData: () => {
			dispatch(getData());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
