import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

import Axios from 'axios'
import './styles.css'

const Simpsons = () => {
    const [personagem, setPersonagem] = useState([])
    const [clique, setClique] = useState(() => {})

    useEffect(() =>{
        const pegaDados = async ()=> {
            const resposta = await Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            const dados = await resposta.data
            setPersonagem(dados)
        }
        pegaDados()
    }, [clique])

    function ligaClick() {
        setClique(personagem)
    }

    return(
        <>
            <Menu />
            <div className="main-simpson">
                {personagem.map(perso => {
                    return(
                        <div className="card"> 
                            <p>{perso.character}</p>
                            <img src={perso.image} alt="Personagens do simpsons"/>
                        </div>
                    )
                })}
                <button onClick={ligaClick}>Clique para trocar o personagem</button>
            </div>
            <Footer/>
        </>
    )
}

export default Simpsons