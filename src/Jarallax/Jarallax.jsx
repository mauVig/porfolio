import React,{ useContext } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { contextL } from './../contextLenguaje'

const Jarallax = () => {
  const { idiom } = useContext( contextL )
  const { ref } = useParallax({ speed: -170 })
  return (
    <>
      <section className="sentece">
        <div className="contJarallax" ref={ ref }>
           <div>
              <p>{ idiom ? `" Internet es el primer invento de la humanidad que la humanidad no entiende. El mayor experimiento de anarquía que hemos tenido. "` : `" The Internet is the first invention of humanity that humanity does not understand. The biggest anarchy experiment we've ever had. "`}</p>
              <p>Eric Schmidt</p>
           </div>
        </div>
      </section>
    </>
  )
}

export default Jarallax