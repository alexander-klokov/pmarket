import React from 'react'
import {useContext} from 'react'

import {Context} from "../Context"

import {CartItem} from "../components/CartItem"

export const Cart = () => {

    const {allPhotos, photoIdsInCart} = useContext(Context)

    const photosInCart = (photoIdsInCart || [])
      .map(photoId => allPhotos.find(photo => photo.id === photoId))
    
    const cartItemElements = photosInCart.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}
