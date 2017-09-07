import React from "react";
import { connect } from "react-redux";
import { decrement } from "../actions/decrement";

class DecrementQty extends React.Component {
    constructor(props) {
        super(props);
        this.decrementQtyFn = this.decrementQtyFn.bind(this);
    }

    decrementQtyFn() {
        const item = this.props.index;
        this.props.dispatch(decrement(item));
    }

    render() {
        return (
            <div className="increase-ctrl">
                <div className="decrease-btn" onClick={this.decrementQtyFn}>
                    -
                </div>
            </div>
        );
    }
}

export default connect()(DecrementQty);
