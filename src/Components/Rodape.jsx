import React from 'react'
import Styles from "../css/Rodape.module.css"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import  {FaTiktok} from "react-icons/fa"

function Rodape() {
  return (
    <div className={Styles.footer}>
        <p>Siga-nos em nossas redes sociais</p>
        <div className={Styles.icones}>

            <AiOutlineInstagram/>
            <AiOutlineWhatsApp/>
            <AiFillFacebook/>
            <FaTiktok/>

        </div>
        <p>Telefone para contato: (11) 97739-6401</p>
    </div>
  )
}

export default Rodape