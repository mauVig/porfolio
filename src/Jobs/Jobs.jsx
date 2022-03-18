import React, { useContext } from 'react'
import dante from './../assets/page-dante.jpg'
import sanacion from './../assets/page-sanacion.jpg'
import { contextL } from './../contextLenguaje.jsx'
import DanteEspa from './DanteEspa'
import DanteEngli from './DanteEngli'
import SanacionEspa from './SanacionEspa'
import SanacionEngli from './SanacionEngli'

const Jobs = () => {
  const { idiom } = useContext( contextL )
  return (
    <>
     <section className="jobs" id="work">
        <h2>{ idiom ? 'MIS TRABAJOS' : 'MY JOBS' }</h2>
        <div className="container">
          <div className="row mt-5"> 
            <div className="col-12 col-lg-6">
              <div className="jobsText">
                <div>
                  { idiom ? <DanteEspa/> : <DanteEngli />}
                  <div className="button justify-content-center align-items-center mt-5">
                    <a href="https://dantebronzini.com.ar" target="_blanck">{ idiom ? 'Visitar web' : 'Visit website'}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center ">
              <div>
                <a href="https://dantebronzini.com.ar" target="_blanck" >
                  <div className="foto">
                    <div className="fotoIn">
                      <div>
                        <span>dantebronzini</span>
                        <span>.com</span>
                        <span>.ar</span>
                      </div>                      
                    </div>
                      <img src={ dante } className="fotoDante" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center ">
              <div>
                <a href="https://sanacionancestral.com.ar/" target="_blanck">
                  <div className="foto">
                    <div className="fotoIn">
                      <div>
                        <span>sanacionancestal</span>
                        <span>.com</span>
                        <span>.ar</span>
                      </div>                      
                    </div>
                    <img src={ sanacion } alt="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="jobsText">
                <div>
                  { idiom ? <SanacionEspa /> : <SanacionEngli /> }
                  <div className="button justify-content-center align-items-center mt-5">
                    <a href="https://sanacionancestral.com.ar/" target="_blanck">{ idiom ? 'Visitar web' : 'Visit website'}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Jobs