import React, { Component } from 'react'
import CartList from './CartList';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../../contexts/ProductProvider';

export default class CartBody extends Component {
    static contextType = ProductsContext;
    render() {
        const value = this.context;
        const { cartSubtotal, clearCart, cartOnShipping, cartTotals } = value;
        console.log(cartSubtotal);
        return (
            <tbody>
                <CartList value={value} />
                <tr>
                    <td><button onClick={() => clearCart()} className="btn btn-danger">Clear Cart</button></td>
                    <td></td>
                    <td></td>
                    <td><h5>Subtotal</h5></td>
                    <td><h5>${cartSubtotal}</h5></td>
                </tr>
                <tr className="shipping_area">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <h5>Shipping</h5>
                    </td>
                    <td>
                        <div className="shipping_box">
                            <ul className="list">
                                <li className="active"><Link to="" onClick={(e) => cartOnShipping(0, e)}>Free Shipping</Link></li>
                                <li><Link to="" onClick={(e) => cartOnShipping(5, e)}>Flat Rate: $5.00</Link></li>
                                <li><Link to="" onClick={(e) => cartOnShipping(10, e)}>Flat Rate: $10.00</Link></li>
                                <li ><Link to="/" onClick={(e) => cartOnShipping(2, e)}>Local Delivery: $2.00</Link></li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr className="shipping_area">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <h5>Totals</h5>
                    </td>
                    <td>
                        <h5>${cartTotals}</h5>
                    </td>
                </tr>
                <tr className="out_button_area">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <div className="checkout_btn_inner">
                            <Link className="gray_btn" to="/">Continue Shopping</Link>
                            <Link className="main_btn" to="/checkout">Proceed to checkout</Link>
                        </div>
                    </td>
                </tr>
            </tbody>
        )
    }
}
