import React from 'react'
import Img from "../../assets/imagem-menu.svg"

import './styles.css'


const Banner = () => { 
    return(
    <div className="main"> 
        <div>
            <h1>Meu site Bonito</h1>
            <p>Site feito em React para treinar react-router-dom e axios</p>
        </div>

        <img src={Img} alt="Ilustração como logo do React" />
    </div>   
    )
}

export default Banner