import { createContext, useState } from 'react'

export const contextL = createContext()

export const Lenguage = ({ children }) => {
    const [ idiom, setIdiom ] = useState(false)

    const choose = () => {
        setIdiom( x => !x)        
        return idiom
    }

    return (
        <contextL.Provider value={{ choose, idiom }}>
            { children }
        </contextL.Provider>
    )
}