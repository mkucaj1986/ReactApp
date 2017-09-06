import React from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import TotalPrice from "../components/TotalPrice";

import { getData } from "../actions/getData";
import "../style/index.scss";

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
		let dataDom = null;
		let noItems = null;
		if (this.isLoading) {
			dataDom = (
				<div className="loading-spinner">
					Loading...
					<div className="sk-fading-circle">
						<div className="sk-circle1 sk-circle" />
						<div className="sk-circle2 sk-circle" />
						<div className="sk-circle3 sk-circle" />
						<div className="sk-circle4 sk-circle" />
						<div className="sk-circle5 sk-circle" />
						<div className="sk-circle6 sk-circle" />
						<div className="sk-circle7 sk-circle" />
						<div className="sk-circle8 sk-circle" />
						<div className="sk-circle9 sk-circle" />
						<div className="sk-circle10 sk-circle" />
						<div className="sk-circle11 sk-circle" />
						<div className="sk-circle12 sk-circle" />
					</div>
				</div>
			);
		}
		if (this.props.dataLoaded) {
			dataDom = <CartItem items={this.props.items} />;
			this.isLoading = false;
		}
		if (this.props.items.length === 0 && this.props.dataLoaded) {
			noItems = <div className="no-items">No items in Cart</div>;
		}
		return (
			<div className="container">
				<h1>7 Ninja React App</h1>
				{dataDom}
				<TotalPrice totalPrice={this.props.totalPrice} />
				{noItems}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.getData.data,
		dataLoaded: state.getData.dataLoaded,
		items: state.getData.items,
		items: state.getData.items,
		totalPrice: state.getData.totalPrice
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
