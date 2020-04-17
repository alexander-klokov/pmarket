import React from "react"
import {useState, useEffect} from "react"

const URL_Photos =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"


const Context = React.createContext()

function ContextProvider (props) {
  const [allPhotos, setAllPhotos] = useState([])
  const [photoIdsInCart, setPhotoIdsInCart] = useState([])

 
  useEffect(() => {
      fetch(URL_Photos)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
  }, [])

  const toggleFavorite = id => {
    const allPhotosUpdated = allPhotos.map(photo => {
      if (photo.id === id) {
        return {...photo, isFavorite: !photo.isFavorite}
      }
      return photo
    })
    setAllPhotos(allPhotosUpdated)
  }

  const toggleInCart = id => {
    // first, check if the image id selected is in the cart
    const isInList = photoIdsInCart.some(photoId => photoId === id)

    if (isInList) { // delete from the cart
      const photoIdsInCardUpdated = photoIdsInCart.filter(photoId => photoId !== id)
      setPhotoIdsInCart(photoIdsInCardUpdated)
      return
    } 
    // add to the cart
    const photoIdsInCartUpdated = photoIdsInCart.concat(id)
    setPhotoIdsInCart(photoIdsInCartUpdated)
  }

  const emptyCart = () => setPhotoIdsInCart([])
  

  const contextToProvide = {
    allPhotos, 
    photoIdsInCart, 
    toggleFavorite, 
    toggleInCart, 
    emptyCart
  }

  return (
    <Context.Provider value={contextToProvide}>
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}