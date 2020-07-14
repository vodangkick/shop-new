import React, { Component } from 'react';
import CartColumn from './CartColumn';
import CartBody from './CartBody';

export default class CartContainer extends Component {
    render() {
        return (
            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <CartColumn />
                                <CartBody />
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
