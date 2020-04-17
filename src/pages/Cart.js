import React from 'react'
import {useContext} from 'react'

import {Context} from "../Context"

import {CartItem} from "../components/CartItem"

export const UNIT_PRICE = 1 // usd

export const Cart = () => {

    const {allPhotos, photoIdsInCart} = useContext(Context)

    const photosInCart = (photoIdsInCart || [])
      .map(photoId => allPhotos.find(photo => photo.id === photoId))
    
    const cartItemElements = photosInCart.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    const totalCost = (photosInCart.length * UNIT_PRICE)
      .toLocaleString("en-US", {style: "currency", currency: "USD"})

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}
