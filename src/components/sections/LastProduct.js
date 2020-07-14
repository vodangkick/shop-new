import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../contexts/ProductProvider';
import ProductItem from '../products/ProductItem';

export default class LastProduct extends Component {
    render() {
        return (

            <ProductConsumer>
                {value => {
                    const { products } = value;
                    return (
                        <section className="feature_product_area latest_product_area" >
                            <div className="main_box">
                                <div className="container">
                                    <div className="feature_product_inner">
                                        <div className="latest_product_inner row">
                                            {products.map((item, index) => <ProductItem key={index} item={item} value={value} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
                }
            </ProductConsumer>
        )
    }
}