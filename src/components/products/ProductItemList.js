import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItemList({ item, value }) {
    const { fields } = item;
    let { name, price, images, slug } = fields;
    let url_img = images[0].fields.file.urlSmall;

    return (
        <div className="col-lg-3 col-sm-6">
            <div className="most_p_list">
                <div className="media">
                    <div className="d-flex">
                        <Link to={`/${slug}`}><img src={url_img} alt="product" /></Link>
                    </div>
                    <div className="media-body">
                        <Link to={`/${slug}`}><h4>{name}</h4></Link>
                        <h3>${price}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}
