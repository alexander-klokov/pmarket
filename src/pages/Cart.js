import React from 'react'
import {useState, useContext} from 'react'

import {Context} from "../Context"

import {CartItem} from "../components/CartItem"

export const UNIT_PRICE = 1 // usd

export const Cart = () => {

    const [orderPlacing, setOrderPlacing] = useState(false)

    const {allPhotos, photoIdsInCart, emptyCart} = useContext(Context)

    const photosInCart = (photoIdsInCart || [])
      .map(photoId => allPhotos.find(photo => photo.id === photoId))
    
    const cartItemElements = photosInCart.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    const totalCost = (photosInCart.length * UNIT_PRICE)
      .toLocaleString("en-US", {style: "currency", currency: "USD"})

    const onPlaceOrder = () => {
        setOrderPlacing(true)
        setTimeout(() => {
            emptyCart()
            setOrderPlacing(false)
        }, 2000)
    }

    const buttonCaption = orderPlacing ? "Ordering..." : "Place Order"

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost}</p>
            <div className="order-button">
                <button onClick={()=>onPlaceOrder()}>{buttonCaption}</button>
            </div>
        </main>
    )
}
