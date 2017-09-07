import React from "react";
import { connect } from "react-redux";
import { increase } from "../actions/increase";
import { getTotalPrice } from "../actions/getTotalPrice";

class IncreaseQty extends React.Component {
    constructor(props) {
        super(props);
        this.increaseQty = this.increaseQty.bind(this);
    }

    increaseQty() {
        const item = this.props.index;
        this.props.dispatch(increase(item));
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
                    disabled={this.props.items[this.props.index].qty === 10}
                    onClick={this.increaseQty}
                >
                    +
                </button>
            </div>
        );
    }
}

export default connect()(IncreaseQty);
