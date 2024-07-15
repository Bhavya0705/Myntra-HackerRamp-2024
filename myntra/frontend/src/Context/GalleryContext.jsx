import React, { createContext } from 'react'
import all_products from '../Components/Assets/all_products'

export const GalleryContext = createContext(null)
const GalleryContextProvider = (props) =>
{
    const contextValue = {all_products};
    return(
        <GalleryContext.Provider value = {contextValue}>
            {props.children}
        </GalleryContext.Provider>
    )
}
export default GalleryContextProvider;