import React from 'react'
import dante from './../assets/page-dante.jpg'
import sanacion from './../assets/page-sanacion.jpg'

const Jobs = () => {
  return (
    <>
     <section className="jobs" id="work">
        <h2>MIS TRABAJOS</h2>
        <div className="container">
          <div className="row mt-5"> 
            <div className="col-12 col-lg-6">
              <div className="jobsText">
                <div>
                  <p>Web realizada para el músico y productor Dante Bronzini, con el objetivo de poder mostrar a través de la web su música.</p>
                  <p>La identidad se diseñó en conjunto con Jimena Vigliero.</p>
                  <p>Utilicé el Framework Bootstrap 5 y dos librerias, Swiper y ScrollReveal.</p>
                  <div className="button justify-content-center align-items-center mt-5">
                    <a href="https://dantebronzini.com.ar" target="_blanck">Visitar web</a>
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
                  <p>Web realizada para promocionar encuentros y retiros grupales.</p>
                  <p>La identidad se diseñó en conjunto con Jimena Vigliero.</p>
                  <p>Utilicé el Framework Bootstrap 5 y la libreria Swiper.</p>
                  <div className="button justify-content-center align-items-center mt-5">
                    <a href="https://sanacionancestral.com.ar/" target="_blanck">Visitar web</a>
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