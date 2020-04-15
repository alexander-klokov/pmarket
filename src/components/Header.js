import React from "react"
import {Link} from "react-router-dom"

export const Header = () => (
    <header>
      <Link to="/"><h2>PMarket</h2></Link>
      <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
    </header>
)
