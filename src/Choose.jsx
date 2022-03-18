import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import spanish from './sources/spanish.jpg'
import english from './sources/english.jpg'
import { contextL } from './contextLenguaje.jsx'

const Choose = () => {
    const go = useNavigate()
    const { changeLenguage } = useContext( contextL )
    const handlesEspa = () => {
        changeLenguage(true)
        localStorage.setItem('lenguage',true)  
        go('/page')
    }
    const handlesEnglish = () => {
        changeLenguage(false)
        localStorage.setItem('lenguage',false)
        go('/page')
    }
  return (
    <>
        <div className="choose">
            <h1>Choose idiom</h1>
            <div className="container">
                <div className='imgCont' onClick={ handlesEspa }>
                    <img src={ spanish } alt="Elija Idioma español"/>
                    <h2>Español</h2>
                </div>
                <div className='imgCont' onClick={ handlesEnglish }>
                    <img src={ english } alt="Choos lenguage english"/>
                    <h2>English</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Choose