import React from 'react'
import CartItem from './CartItem'

export default function CartList({ value }) {
    const { cart } = value;
    return (
        <>
            {cart.map((item, index) => <CartItem key={index} item={item} value={value} />)}
        </>
    )
}
