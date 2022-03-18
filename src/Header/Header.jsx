import React, { useRef, useEffect, useContext, useState } from 'react'
import scrollReveal from "scrollreveal"
import mau from './../assets/full-stack-mauro-vigliero-03.png'
import HeaderTop from './HeaderTop'
import { contextL } from './../contextLenguaje'


const Header = () => {
  const { idiom } = useContext( contextL )
  const [ textIdiom, setTextIdiom ] = useState(false)
  const fullName = useRef()
  const dev = useRef()
  const h1  = useRef()
  const pas = useRef()
  const cuento = useRef()
  const headerRedes = useRef()
  const foto = useRef()
  const buttons = useRef()
  const textStart2 = useRef()
  const textStart = {
    delay: 3900,
    reset: false,
    duration: 4000,
    scale: .5,
  }
  useEffect(()=>{  
    scrollReveal().reveal(fullName.current,{
      delay:2500,
      reset:false
    })
    scrollReveal().reveal(foto.current,{
      delay:100,
      reset:false,
      duration: 7000
    });
    scrollReveal().reveal( dev.current, textStart )
    scrollReveal().reveal( h1.current, textStart )
    scrollReveal().reveal( pas.current, textStart )
    scrollReveal().reveal( cuento.current, textStart )
    scrollReveal().reveal( headerRedes.current, textStart )
    scrollReveal().reveal( buttons.current, textStart )
    scrollReveal().reveal( textStart2.current, { ...textStart, delay:5000 })
  },[])
 

  return ( 
    <>
      <header>
        <div className="headerTop">
          <HeaderTop />
        </div>
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 col-lg-6 order-2 d-flex align-items-center justify-content-center">
                <h1>Mauro Vigliero desarrollador frond-end y back-end. Full-Stack</h1>
                <div>
                  <main>
                    <p className="developer" ref={ dev }>{ idiom ? 'Desarrollador' : 'Developer'}</p>
                    <h2 ref={ h1 }>Full-Stack</h2>
                    <p className="presentation" ref={ fullName } >{ idiom ? `Soy` : `My name is`}  <strong >Mauro Vigliero.</strong></p>
                    <p className="presentation" ref={ pas }>{ idiom ? 'Me apasiona programar.' : 'I am passionate about programming.'} </p>
                    <p className="presentation" ref={ cuento }> { idiom ? 'Cuento con amplio conocimiento para desarrollar' : 'I have extensive knowledge to develop '} <strong ref={ textStart2 }>{ idiom ? 'Sitios Web y APPs' : 'Websites and APPs '}</strong>.</p>
                  </main>
                  <div className="redes" ref={ headerRedes }>
                    <a href="https://www.linkedin.com/in/maurovigliero/" target="_blanck">
                      <svg viewBox="0 0 260.366 260.366">
                          <path d="M34.703,0.183C15.582,0.183,0.014,15.748,0,34.884C0,54.02,15.568,69.588,34.703,69.588
                            c19.128,0,34.688-15.568,34.688-34.704C69.391,15.75,53.83,0.183,34.703,0.183z"/>
                          <path d="M60.748,83.531H8.654c-2.478,0-4.488,2.009-4.488,4.489v167.675c0,2.479,2.01,4.488,4.488,4.488h52.093
                            c2.479,0,4.489-2.01,4.489-4.488V88.02C65.237,85.539,63.227,83.531,60.748,83.531z"/>
                          <path d="M193.924,81.557c-19.064,0-35.817,5.805-46.04,15.271V88.02c0-2.48-2.01-4.489-4.489-4.489H93.424
                            c-2.479,0-4.489,2.009-4.489,4.489v167.675c0,2.479,2.01,4.488,4.489,4.488h52.044c2.479,0,4.489-2.01,4.489-4.488v-82.957
                            c0-23.802,4.378-38.555,26.227-38.555c21.526,0.026,23.137,15.846,23.137,39.977v81.535c0,2.479,2.01,4.488,4.49,4.488h52.068
                            c2.478,0,4.488-2.01,4.488-4.488v-91.977C260.366,125.465,252.814,81.557,193.924,81.557z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/mvigliero" target="_blanck">
                      <svg viewBox="0 0 310 310" >
                        <path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
                          c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
                          V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
                          C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
                          c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
                      </svg>
                    </a>
                    <a href="" target="_blanck">
                      <svg viewBox="0 0 300 300" >
                            <path d="M38.52,0.012h222.978C282.682,0.012,300,17.336,300,38.52v222.978c0,21.178-17.318,38.49-38.502,38.49
                              H38.52c-21.184,0-38.52-17.313-38.52-38.49V38.52C0,17.336,17.336,0.012,38.52,0.012z M218.546,33.329
                              c-7.438,0-13.505,6.091-13.505,13.525v32.314c0,7.437,6.067,13.514,13.505,13.514h33.903c7.426,0,13.506-6.077,13.506-13.514
                              V46.854c0-7.434-6.08-13.525-13.506-13.525H218.546z M266.084,126.868h-26.396c2.503,8.175,3.86,16.796,3.86,25.759
                              c0,49.882-41.766,90.34-93.266,90.34c-51.487,0-93.254-40.458-93.254-90.34c0-8.963,1.37-17.584,3.861-25.759H33.35v126.732
                              c0,6.563,5.359,11.902,11.916,11.902h208.907c6.563,0,11.911-5.339,11.911-11.902V126.868z M150.283,90.978
                              c-33.26,0-60.24,26.128-60.24,58.388c0,32.227,26.98,58.375,60.24,58.375c33.278,0,60.259-26.148,60.259-58.375
                              C210.542,117.105,183.561,90.978,150.283,90.978z"/>
                      </svg>
                    </a>
                  </div>
                  <div className="button" ref={ buttons }>
                      <a href="#work">{ idiom ? 'Ver Trabajos' : 'See jobs'}</a>
                      <a href="./sources/Mauro-Vigliero-CV-2022.pdf" className="cv" download>{ idiom ? 'Descargar CV' : 'Download CV'}</a>
                  </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 order-1">
                <div className="d-flex justify-content-center">
                    <img src={ mau } ref={ foto } className="fotoMau" alt="Foto principal de Mauro Vigliero" />
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header