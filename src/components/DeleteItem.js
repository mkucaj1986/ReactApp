import React from "react";
import "../style/components/DeleteItem.scss";

class CartItem extends React.Component {
	constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
	}

	deleteItem() {
		debugger;
	}

	render() {
		return (
			<div>
				<a className="del-btn" onClick={this.deleteItem} />
			</div>
		);
	}
}

export default CartItem;
