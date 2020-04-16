import React from 'react'
import {useState} from 'react'

export const Image = ({className, img}) => {

  const [isHovered, setIsHovered] = useState(false)

  const maybeHeartIcon = isHovered && <i className="ri-heart-line favorite"></i>
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