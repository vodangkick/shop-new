import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import BannerSecond from '../components/sections/BannerSecond';
import CartContainer from '../components/products/Cart/CartContainer';
import CartEmpty from '../components/products/Cart/CartEmpty';
import { ProductsContext } from '../contexts/ProductProvider';


export default class Cart extends Component {
    static contextType = ProductsContext;
    render() {
        const { cart } = this.context;
        return (
            <>
                <Header />
                <BannerSecond title="Shopping Cart" link="/cart" />
                {cart.length > 0 ? <CartContainer /> : <CartEmpty />}
                <Footer />
            </>
        )
    }
}
