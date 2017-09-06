import React from "react";
import { connect } from "react-redux";
import "../style/components/TotalPrice.scss";

class TotalPrice extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="total-price">
                {"Total Price:" + " " + this.props.totalPrice + " " + "$"}
            </div>
        );
    }
}

export default TotalPrice;
