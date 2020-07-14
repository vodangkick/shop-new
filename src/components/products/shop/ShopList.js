import React from 'react'
import ProductItem from '../ProductItem';
import EmptyProduct from './EmptyProduct';

export default function ShopList({ value, data }) {
    const { sortShop } = value;
    console.log(data, 'shop list');
    return (
        sortShop.length > 1 ? <div className="latest_product_inner row">
            {data.map((item, key) => <ProductItem key={key} item={item} value={value} classname="col-lg-4 col-md-4 col-sm-6" />
            )}
        </div> : <EmptyProduct />

    )
}
