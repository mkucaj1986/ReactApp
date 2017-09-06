import React from "react";
import { connect } from "react-redux";
import "../style/components/DeleteItem.scss";

import { removeItem } from "../actions/removeItem";

class DeleteItem extends React.Component {
	constructor(props) {
		super(props);
		this.delItem = this.delItem.bind(this);
	}

	delItem() {
		const item = this.props.index;
		this.props.dispatch(removeItem(item));
	}

	render() {
		return (
			<div>
				<a className="del-btn" onClick={this.delItem} />
			</div>
		);
	}
}

export default connect()(DeleteItem);
