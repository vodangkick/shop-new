import React from 'react';
import ProductList from '../products/ProductList';
import TitleMain from '../common/TitleMain';

export default function MostSearchProduct() {
    return (
        <section className="most_product_area">
            <div className="main_box">
                <div className="container">
                    <TitleMain title="Most Searched Products">
                        Who are in extremely love with eco friendly system.
                    </TitleMain>
                    <ProductList />
                </div>
            </div>
        </section>
    )
}
