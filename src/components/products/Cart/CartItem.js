import React from 'react'
import { Link } from 'react-router-dom';

export default function CartItem({ item, value }) {
    const { inCrement, deCrement, removeCartItem } = value;
    const { name, slug, price, count, subtotal, images } = item.fields;
    const id = item.sys.id;
    let url_img = images[0].fields.file.url;

    console.log(count);

    return (
        <tr>
            <td>
                <div className="media">
                    <div className="d-flex">
                        <Link to={`/${slug}`}><img src={url_img} alt={name} /></Link>
                    </div>
                    <div className="media-body">
                        <p>{name}</p>
                    </div>
                </div>
            </td>
            <td>
                <h5>${price}</h5>
            </td>
            <td>
                <div className="product_count">
                    <input type="text" name="qty" id="sst" maxLength={12} value={count} title="Quantity:" className="input-text qty" />
                    <button onClick={() => inCrement(id)} className="increase items-count" type="button"><i className="lnr lnr-chevron-up" /></button>
                    <button onClick={() => deCrement(id)} className="reduced items-count" type="button"><i className="lnr lnr-chevron-down" /></button>
                </div>
            </td>
            <td><button className="btn btn-danger" onClick={() => removeCartItem(id)}><i className="fa fa-close"></i></button></td>
            <td>
                <h5>${subtotal}</h5>
            </td>
        </tr>
    )
}
