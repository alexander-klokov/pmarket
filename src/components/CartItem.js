import React from "react"
import {useContext} from "react"

import {Context} from "../Context"

export const CartItem = ({item}) => {
    const {toggleInCart} = useContext(Context)

    return (
      <div className="cart-item">
        <i className="ri-delete-bin-line" onClick={()=>toggleInCart(item.id)}></i>
        <img src={item.url} width="130px" alt=""/>
        <p>$0.99</p>
      </div>
    )
}