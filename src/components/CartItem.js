import React from "react"
import {useState, useContext} from "react"
import {PropTypes} from 'prop-types'

import {Context} from "../Context"

import {UNIT_PRICE} from "../pages/Cart"

export const CartItem = ({item}) => {
    const [isTrashHovered, setIsTrashHovered] = useState(false)

    const {toggleInCart} = useContext(Context)

    const unitPrice = UNIT_PRICE.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const setIsHovered = isHovered => setIsTrashHovered(isHovered)
    const trashIconClass = isTrashHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
      <div className="cart-item">
        <i className={trashIconClass} 
        onClick={()=>toggleInCart(item.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        </i>
        <img src={item.url} width="130px" alt=""/>
        <p>{unitPrice}</p>
      </div>
    )
}

CartItem.propTypes = {
  item: PropTypes.shape({
      url: PropTypes.string.isRequired
  })
}