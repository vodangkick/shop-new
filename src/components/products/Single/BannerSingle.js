import React from 'react';
import { Link } from 'react-router-dom';

export default function BannerSingle({ product }) {
    const { category, fields } = product;
    if (!category) {
        return category;
    }
    return (
        <section className="banner_area">
            <div className="banner_inner d-flex align-items-center">
                <div className="container">
                    <div className="banner_content text-center">
                        <h2>{product.fields.name}</h2>
                        <div className="page_link">
                            <Link to="/">Home</Link>
                            <Link to="/">{category.name}</Link>
                            <Link to={`/${fields.slug}`}>{fields.name}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
