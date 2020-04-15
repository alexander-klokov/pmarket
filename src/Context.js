import React from "react"
import {useState, useEffect} from "react"

const URL_Photos =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"


const Context = React.createContext()

function ContextProvider (props) {
  const [allPhotos, setAllPhotos] = useState([])
 
  useEffect(() => {
      fetch(URL_Photos)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
  }, [])

  return (
    <Context.Provider value={{allPhotos}}>
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}