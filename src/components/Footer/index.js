import React from 'react'

import {FiLinkedin} from 'react-icons/fi';
import {FiGithub} from 'react-icons/fi';
import {FaInstagram} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';

import './styles.css'


const Footer = () => {
    return(
        <div className="footer">
            <div className="sobre-autora">
                <h2>Sobre Mim</h2>
                <p> Canceriana, nordestina, apaixonada por chás e livros, mãe de doguinhos,<br/> 
                adoro viagens, amigos e  filmes. Engenheira de pesca mas me descobri na programação,<br/> 
                encantada com as novas descobertas no mundo da tecnologia.</p>
            </div>
            <div>   
                <div className="links-icones">
                    <h2>Aline Alves</h2>
                    <a className="links" href="https://www.linkedin.com/in/aline-alves-dias/">
                        <FiLinkedin size={50} color="#fff" padding="20%"/>
                    </a>

                    <a className="links" href="https://github.com/AlvesAline">
                        <FiGithub size ={50} color="#fff" />
                    </a>

                    <a className="links" href="https://www.instagram.com/alvesaline2/">
                        <FaInstagram size ={50} color="#fff"/>
                    </a>
                    <a className="links" href="https://www.facebook.com/line.alves.98">
                        <FiFacebook size ={50} color="#fff"/>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer