import React from "react"
import {useContext} from "react"

import {Context} from "../Context"

import {UNIT_PRICE} from "../pages/Cart"

export const CartItem = ({item}) => {
    const {toggleInCart} = useContext(Context)

    const unitPrice = UNIT_PRICE.toLocaleString("en-US", {style: "currency", currency: "USD"})

    return (
      <div className="cart-item">
        <i className="ri-delete-bin-line" onClick={()=>toggleInCart(item.id)}></i>
        <img src={item.url} width="130px" alt=""/>
        <p>{unitPrice}</p>
      </div>
    )
}