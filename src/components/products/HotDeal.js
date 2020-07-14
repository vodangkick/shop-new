import React from 'react';
import { Link } from 'react-router-dom';

export default function HotDeal(props) {

    return (
        <div className="col-lg-6">
            <div className="hot_p_item">
                <img className="img-fluid" src="img/product/hot-product/hot-p-1.jpg" alt="" />
                <div className="product_text">
                    <h4>{props.children}</h4>
                    <Link to={props.link}>Shop Now</Link>
                </div>
            </div>
        </div>
    )
}
