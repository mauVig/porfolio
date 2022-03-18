import React, { useContext } from 'react'
import { contextL } from './../contextLenguaje'

const Contact = () => {
  const { idiom } = useContext( contextL )
  return (
    <>
      <section className="contact" id="contRes">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-4 mx-auto contactWidth">
              <h2 className="titleThanks">{ idiom ? 'Contacto' : 'Contact'}</h2>
              <p className="textThanks">{idiom ? 'Estoy disponible para que me consultes cualquier tipo de proyecto.' : 'I am available for you to consult any type of project.'}</p>
              <div className="buttonAnser flex-column d-none">
                <h2 className='gracias'>{ idiom ? '¡ Gracias por comunicarte !' : 'Thanks for getting in touch!'}</h2> 
                <div className="my-5 h3">
                  😍😍😍
                </div>   
                <p>{ idiom ? 'Te respondere a la brevedad' : 'I will answer promptly'}</p>
                <p>{ idiom ? '¿ Queres mandarme otra consulta ?' : 'Do you want to send me another question?'}</p>            
                <a href="https://maurovigliero.com.ar#contRes">{ idiom ? 'Si, quiero' : 'Yes, i do'}</a>
              </div>
              <form action="https://formsubmit.co/mauro.vigliero@yahoo.com" method="POST">
                <div>
                  <label for="nom">{ idiom ? 'Nombre' : 'Name'}</label>
                  <input name="nombre" type="text" id="nom" required />
                </div>
               <div>
                  <label for="emai">Email</label>
                  <input name="email" type="email" id="emai" required />
               </div>
                <div>
                  <label for="con">{ idiom ? 'Consulta' : 'Question'}</label>
                  <textarea name="consulta" id="con" cols="30" rows="10"></textarea>
                </div>
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" className='d-none' />
                <input type="hidden" name="_next" value="https://maurovigliero.com.ar/?res=true#contRes" />
                <div className="buttonSub">
                  <button type="submit">{ idiom ? 'Enviar' : 'Send'}</button>
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