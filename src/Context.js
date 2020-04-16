import React from "react"
import {useState, useEffect} from "react"

const URL_Photos =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"


const Context = React.createContext()

function ContextProvider (props) {
  const [allPhotos, setAllPhotos] = useState([])
  const [photosInCart, setPhotosInCart] = useState([])

 
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
    // first, check if the image selected is in the cart
    const isInList = photosInCart.some(photo => photo.id === id)

    if (isInList) { // delete from the cart
      const photosInCardUpdated = photosInCart.filter(photo => photo.id !== id)
      setPhotosInCart(photosInCardUpdated)
      return
    } 
    // add to the cart
    const photoToAdd = allPhotos.find(photo => photo.id === id)
    const photosInCardUpdated = photoToAdd !== undefined ? 
      photosInCart.concat(photoToAdd) : [...photosInCart]

    setPhotosInCart(photosInCardUpdated)
  }

  return (
    <Context.Provider value={{allPhotos, toggleFavorite, toggleInCart}}>
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}