import React from 'react'

export default function CartColumn() {
    return (
        <thead>
            <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Remove</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
    )
}
