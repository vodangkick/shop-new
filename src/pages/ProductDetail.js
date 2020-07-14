import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { ProductsContext } from '../contexts/ProductProvider';
import { BannerSingle, ProductDescriptionArea, ProductArea } from '../components/products/Single';
import { MostSearchProduct } from '../components/sections';


export default class ProductDetail extends Component {
    static contextType = ProductsContext;

    render() {
        let value = this.context;
        const { getProductDetail } = value;
        const product = getProductDetail(this.props.match.params.slug);

        return (
            <>
                <Header />
                <BannerSingle product={product} />
                <ProductArea product={product} value={value} />
                <ProductDescriptionArea product={product} />
                <MostSearchProduct />
                <Footer />
            </>
        )
    }
}
