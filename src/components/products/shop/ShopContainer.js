import React, { Component } from 'react';
import ShopContent from './ShopContent';
import FilterSort from './FilterSort';
import { ProductsContext } from '../../../contexts/ProductProvider';

export default class ShopContainer extends Component {
    static contextType = ProductsContext;


    render() {
        const value = this.context;

        return (
            <section section className="cat_product_area p_120" >
                <div className="container">
                    <div className="row flex-row-reverse">
                        <ShopContent value={value} />
                        <FilterSort value={value} />
                    </div>
                </div>
            </section >
        )
    }
}
