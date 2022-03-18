import React, { useContext, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import logo from './../assets/logo-06.jpg'
import { contextL } from './../contextLenguaje'
import scrollReveal from "scrollreveal"



const HeaderTop = () => {
  const cont = useRef()
  const go = useNavigate()
  const { idiom } = useContext( contextL )
  useEffect(()=>{
    scrollReveal().reveal(cont.current,{
      delay: 4200,
      reset: false,
      duration: 4000
    });
  },[])

  const handler = () => {    
    go('/')
  }

  return (
    <>
        <div className="container topCont" ref={ cont }>
            <img src={ logo } className="logo" alt="Logo de Mauro Daniel Vigliero" />
            <div className="idiom">
                <button onClick={ handler }>{ idiom ? 'Choose lenguage':'Cambiar idioma' }</button>
            </div>
        </div>
    </>
  )
}

export default HeaderTop