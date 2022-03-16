import React, { useContext, useState } from 'react'
import logo from './../assets/logo-06.jpg'
import { contextL } from './../contextLenguaje'


const HeaderTop = () => {
  const { choose } = useContext( contextL )
  const [ idiom, setIdiom ] = useState(false)

  const handler = () => {    
    setIdiom( choose() ) 
  }

  return (
    <>
        <div className="container topCont">
            <img src={ logo } className="logo" alt="Logo de Mauro Daniel Vigliero" />
            <div>
                <button onClick={ handler }>{ idiom ? 'Enlish':'Español' }</button>
            </div>
        </div>
    </>
  )
}

export default HeaderTop