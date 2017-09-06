import React from "react";
import "../style/components/CartItem.scss";
import DeleteItem from "../components/DeleteItem";

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const items = this.props.data.items;
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
                                            <DeleteItem />
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
