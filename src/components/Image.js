import React from 'react'
import {useContext} from 'react'
import {useHover} from '../hooks/useHover'

import PropTypes from 'prop-types'

import {Context} from "../Context"

export const Image = ({className, img}) => {

  const [isHovered, ref] = useHover()

  const {toggleFavorite, toggleInCart, photoIdsInCart} = useContext(Context)

  // heart icon
  const heartIconType = img.isFavorite ? "ri-heart-fill" : "ri-heart-line"
  const maybeHeartIcon = isHovered && 
    <i className={`${heartIconType} favorite`} onClick={()=>toggleFavorite(img.id)}></i>

  // cart icon
  const maybeCartIcon = () => {
    const isInCart = photoIdsInCart.some(photoId => photoId === img.id)
    if (isInCart) {
      return <i className="ri-add-circle-fill cart" onClick={()=>toggleInCart(img.id)}></i> 
    }
    // not in the cart
    if (isHovered) {
      return <i className="ri-add-circle-line cart" onClick={()=>toggleInCart(img.id)}></i> 
    }
 
    return ''
  }

  return (
  <div className={`${className} image-container`} ref={ref}>

    <img src={img.url} className="image-grid" alt=""/>

    {maybeHeartIcon}

    {maybeCartIcon()}

  </div>
  )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool
    }).isRequired
}
