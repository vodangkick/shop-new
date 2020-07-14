import React, { Component } from 'react';
import { ProductConsumer } from '../../contexts/ProductProvider';
import { Link } from 'react-router-dom';


export default class ProductDetailContainer extends Component {
    render() {
        return (
            <>
                <Link to='/'>Home return</Link>
                <ProductConsumer>
                    {value => {
                        const { getProductDetail } = value;
                        const product = getProductDetail(this.props.match.params.slug);
                        const { name, price } = product.fields;
                        return (
                            <div>
                                <h1>{name}</h1>
                                <span>price : $ {price}
                                </span>
                            </div>
                        )

                    }}
                </ProductConsumer>
            </>
        )

    }
}
