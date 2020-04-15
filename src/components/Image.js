import React from 'react'

export const Image = ({className, img}) => (
  <div className={`${className} image-container`}>
    <img src={img.url} className="image-grid"/>
  </div>
)