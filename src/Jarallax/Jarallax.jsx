import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const Jarallax = () => {
  const { ref } = useParallax({ speed: -170 })
  return (
    <>
      <section className="sentece">
        <div className="contJarallax" ref={ ref }>
           <div>
              <p>" Internet es el primer invento de la humanidad que la humanidad no entiende. El mayor experimiento de anarquía que hemos tenido. "</p>
              <p>Eric Schmidt</p>
           </div>
        </div>
      </section>
    </>
  )
}

export default Jarallax