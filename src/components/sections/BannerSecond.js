import React from 'react';
import { Link } from 'react-router-dom';

export default function BannerSecond({ title, link }) {

    return (
        <section className="banner_area">
            <div className="banner_inner d-flex align-items-center">
                <div className="container">
                    <div className="banner_content text-center">
                        <h2>{title}</h2>
                        <div className="page_link">
                            <Link to="/">Home</Link>
                            <Link to={link}>{title}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
