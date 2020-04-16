import React from 'react'
import {useState, useContext} from 'react'

import {Context} from "../Context"

export const Image = ({className, img}) => {

  const [isHovered, setIsHovered] = useState(false)

  const {toggleFavorite} = useContext(Context)

  // heart icon
  const heartIconType = img.isFavorite ? "ri-heart-fill" : "ri-heart-line"
  const maybeHeartIcon = isHovered && 
    <i className={`${heartIconType} favorite`} onClick={()=>toggleFavorite(img.id)}></i>

  // cart icon
  const maybeCartIcon = isHovered && <i className="ri-add-circle-line cart"></i>

  return (
  <div className={`${className} image-container`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>

    <img src={img.url} className="image-grid"/>

    {maybeHeartIcon}

    {maybeCartIcon}

  </div>
  )
}