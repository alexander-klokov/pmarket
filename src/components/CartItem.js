import React from "react"
import {useContext} from "react"
import {useHover} from "../hooks/useHover"

import {PropTypes} from 'prop-types'

import {Context} from "../Context"
import {UNIT_PRICE} from "../pages/Cart"

export const CartItem = ({item}) => {
    const [isHovered, ref] = useHover()

    const {toggleInCart} = useContext(Context)

    const trashIconClass = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    const unitPrice = UNIT_PRICE.toLocaleString("en-US", {style: "currency", currency: "USD"})

    return (
      <div className="cart-item">
        <i className={trashIconClass} 
        onClick={()=>toggleInCart(item.id)}
        ref={ref}>
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