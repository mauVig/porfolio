import { createContext, useState } from 'react'

export const contextL = createContext()

export const Lenguage = ({ children }) => {
    const [ idiom, setIdiom ] = useState(false)

    const changeLenguage = ( lenguage ) => {
        setIdiom( lenguage )
    }

    return (
        <contextL.Provider value={{ changeLenguage, idiom }}>
            { children }
        </contextL.Provider>
    )
}