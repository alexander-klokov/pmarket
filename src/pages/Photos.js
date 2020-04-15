import React from 'react'
import {useContext} from 'react'

import {Context} from "../Context"
import {Image} from "../components/Image"
import {getClass} from "../utils"


export const Photos = () => {
    const {allPhotos} = useContext(Context)

    const imageElements = (allPhotos || []).map((picture, j) => (
        <Image key={picture.id} img={picture} className={getClass(j)} />
    ))
  
    return (
    <main className="photos">
        {imageElements}
    </main>
    )
    }
