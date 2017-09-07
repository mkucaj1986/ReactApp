import React from "react";
import { connect } from "react-redux";
import "../style/components/CartItem.scss";
import DeleteItem from "../components/DeleteItem";

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const items = this.props.items;
        return (
            <div>
                <div className="row">
                    <div className="cart-Item">
                        <h1>CartItems</h1>
                        <div className="cart-item-container">
                            {items.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="cart-item-el-list"
                                    >
                                        <div className="cart-item-img">
                                            <img
                                                className="img-fluid"
                                                src={item.img}
                                            />
                                        </div>
                                        <div className="cart-item-center-text">
                                            <h2>{item.title}</h2>
                                            <p>{item.subtitle}</p>
                                        </div>
                                        <div className="cart-item-right-part">
                                            <DeleteItem index={index} />
                                            <div className="cart-item-price-box">
                                                <div className="cart-iem-qty-controls">
                                                    <div className="cart-iem-qty-controls-part cart-item-increase">
                                                        -
                                                    </div>
                                                    <div className="cart-iem-qty-controls-part-center cart-item-qty">
                                                        {item.qty}
                                                    </div>
                                                    <div className="cart-iem-qty-controls-part cart-item-decrease">
                                                        +
                                                    </div>
                                                </div>
                                                <div className="cart-item-price">
                                                    {item.price + " " + "$"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;
