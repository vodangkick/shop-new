import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import {
    BannerHome, ClientsLogo, DealTime, FeatureProduct,
    LastProduct, MostSearchProduct
} from '../components/sections';



export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <BannerHome />
                <FeatureProduct />
                <DealTime />
                <LastProduct />
                <ClientsLogo />
                <MostSearchProduct />
                <Footer />
            </>
        )
    }
}
