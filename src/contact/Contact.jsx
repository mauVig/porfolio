import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="contact" id="contRes">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-4 mx-auto contactWidth">
              <h2 className="titleThanks">Contacto</h2>
              <p className="textThanks">Estoy disponible para que me consultes cualquier tipo de proyecto.</p>
              <div className="buttonAnser flex-column d-none">
                <h2 className='gracias'>¡ Gracias por comunicarte !</h2> 
                <div className="my-5 h3">
                  😍😍😍
                </div>   
                <p>Te respondere a la brevedad</p>
                <p>¿ Queres mandarme otra consulta ?</p>            
                <a href="https://maurovigliero.com.ar#contRes">Si, quiero</a>
              </div>
              <form action="https://formsubmit.co/mauro.vigliero@yahoo.com" method="POST">
                <div>
                  <label for="nom">Nombre</label>
                  <input name="nombre" type="text" id="nom" required />
                </div>
               <div>
                  <label for="emai">Email</label>
                  <input name="email" type="email" id="emai" required />
               </div>
                <div>
                  <label for="con">Consulta</label>
                  <textarea name="consulta" id="con" cols="30" rows="10"></textarea>
                </div>
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" className='d-none' />
                <input type="hidden" name="_next" value="https://maurovigliero.com.ar/?res=true#contRes" />
                <div className="buttonSub">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Contact