import React from "react"
import {useContext} from "react"

import {Link} from "react-router-dom"

import {Context} from "../Context"

export const Header = () => {
  const {photoIdsInCart} = useContext(Context)

  const isCartEmpty = photoIdsInCart.length === 0
  const cartIconType = isCartEmpty ? "ri-shopping-cart-line" : "ri-shopping-cart-fill"

  return (
    <header>
      <Link to="/"><h2>PMarket</h2></Link>
      <Link to="/cart"><i className={`${cartIconType} ri-fw ri-2x`}></i></Link>
    </header>
  )
}
