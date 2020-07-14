import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import BannerSecond from '../components/sections/BannerSecond';
import MostSearchProduct from '../components/sections/MostSearchProduct';
import ShopContainer from '../components/products/shop/ShopContainer';

export default class Shop extends Component {
    render() {
        return (
            <>
                <Header />
                <BannerSecond title="Shop page" link="/shop" />
                <ShopContainer />
                <MostSearchProduct />
                <Footer />
            </>
        )
    }
}
