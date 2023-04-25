import {link} from 'react-router-dom'

import Styles from "../css/HeaderTopo.module.css"
import viagens from "../imagens/viagens.jpg"
import lupa from "../imagens/lupa.png"


    function HeaderTopo(){

        return(
            <div className={Styles.home}>
             <img className={Styles.viagens} src={viagens} alt="logo" />
            <div className={Styles.home}>
                <p>Home</p>
                <p>Aruba</p>
                <p>Grand Canyon</p>
                <p>Escocia</p>
                <p>China</p>
            </div>

            <input type="text" />

            <img className={Styles.lupa} src={lupa}/>
            </div>
        )
    }
    
    export default HeaderTopo