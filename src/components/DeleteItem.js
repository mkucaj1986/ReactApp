import React from "react";

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
				<button className="del-btn" onClick={this.deleteItem} />
			</div>
		);
	}
}

export default CartItem;
