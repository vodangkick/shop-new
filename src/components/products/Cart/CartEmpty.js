import React from 'react'
import { Link } from 'react-router-dom';

export default function CartEmpty() {
    return (
        <div className="container empty-cart text-center">
            <h1> Empty Cart</h1>
            <div><Link to="/shop" className="btn btn-danger">Continue Shopping</Link></div>
        </div>
    )
}
