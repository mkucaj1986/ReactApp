import React from "react";
import { connect } from "react-redux";
import { increase } from "../actions/increase";

class IncreaseQty extends React.Component {
    constructor(props) {
        super(props);
        this.increaseQty = this.increaseQty.bind(this);
    }

    increaseQty() {
        const item = this.props.index;
        this.props.dispatch(increase(item));
    }

    render() {
        return (
            <div className="increase-ctrl">
                <div className="increase-btn" onClick={this.increaseQty}>
                    +
                </div>
            </div>
        );
    }
}

export default connect()(IncreaseQty);
