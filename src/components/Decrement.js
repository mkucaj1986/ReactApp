import React from "react";
import { connect } from "react-redux";
import { decrement } from "../actions/decrement";
import { getTotalPrice } from "../actions/getTotalPrice";

class DecrementQty extends React.Component {
    constructor(props) {
        super(props);
        this.decrementQtyFn = this.decrementQtyFn.bind(this);
    }

    decrementQtyFn() {
        const item = this.props.index;
        this.props.dispatch(decrement(item));
    }
    componentDidUpdate() {
        const items = this.props.items;
        this.props.dispatch(getTotalPrice(items));
    }
    render() {
        return (
            <div className="increase-ctrl">
                <button
                    className="qty-ctrl-btn"
                    type="button"
                    disabled={this.props.items[this.props.index].qty === 1}
                    onClick={this.decrementQtyFn}
                >
                    -
                </button>
            </div>
        );
    }
}

export default connect()(DecrementQty);
