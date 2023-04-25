import React from 'react'
import mala from "../imagens/mala.jpg"
import Styles from "../css/Home.module.css"

const Home = () => {
  return (
    <div className={Styles.home}>
        <img className={Styles.mala}  src={mala} alt="" />

        <div className={Styles.textos}>
            <h2>Encontre aqui a viagem dos seus sonhos!!</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maxime quidem mollitia officia rem tempora fugiat nihil commodi sequi. Tempora id laborum soluta maiores. Sapiente voluptatum fugit pariatur ipsum nemo.</p>
        </div>
    </div>
  )
}

export default Home