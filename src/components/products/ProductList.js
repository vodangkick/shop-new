import React from 'react';
import { ProductConsumer } from '../../contexts/ProductProvider';
import ProductItemList from './ProductItemList';

export default function ProductList() {
    return (
        <ProductConsumer>
            {value => {
                const { products } = value;
                return (
                    <div className="row most_product_inner ">
                        {products.map((item, index) => {
                            return (<ProductItemList key={index} item={item} value={value} />)
                        })}
                    </div>
                )
            }}
        </ProductConsumer>

    )
}
