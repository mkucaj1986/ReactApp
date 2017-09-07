import React from "react";
import { connect } from "react-redux";
import { selectSku } from "../actions/selectSku";
import "../style/components/Select.scss";

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange = event => {
        const sku = event.target.value;
        const index = this.props.index;
        this.props.dispatch(selectSku(sku, index));
    };
    render() {
        const skus = this.props.sku[0];
        const selectItems = Object.keys(skus).map(k => skus[k]);
        return (
            <div>
                <select onChange={this.onChange}>
                    {selectItems.map((item, index) => {
                        return (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }
}

export default connect()(Select);
