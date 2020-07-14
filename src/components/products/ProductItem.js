import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ item, value, classname }) {
    const { addToCart } = value;
    const { sys, fields } = item;
    let { name, price, images, slug } = fields;
    let url_img = images[0].fields.file.url;

    return (
        <div className={classname ? classname : 'col-lg-3 col-md-4 col-sm-6'}>
            <div className="f_p_item">
                <div className="f_p_img">
                    <Link to={`/${slug}`}>
                        <img className="img-fluid" src={url_img} alt="" />
                    </Link>
                    <div className="p_icon">
                        <Link to="/"><i className="lnr lnr-heart" /></Link>
                        <a href="javascrip:void(0)" onClick={() => addToCart(sys.id)}  >
                            <i className="lnr lnr-cart" />
                        </a>
                    </div>
                </div>
                <Link to={`/${slug}`} item={item}><h4>{name}</h4></Link>
                <h5>$ {price}</h5>
            </div>
        </div>
    )
}
