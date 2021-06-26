//useEffect -> consumir api
//useState -> guarda os dados
import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Harry from './harry.jpeg';

import Axios from 'axios'
import './styles.css'



const Serie = () => {
    const [filmes, setFilmes] = useState([])
    const [busca, setBusca] = useState('') 
    const [filtroAlunos, setFiltroAlunos] = useState([])

    useEffect(() => {
        const pegaPersonagens = async ()=> {
            const url = await Axios.get('http://hp-api.herokuapp.com/api/characters')
            // console.log(url);
            const dados = await url.data
            setFilmes(dados)
        }
        pegaPersonagens()
    }, [])

    useEffect(() => {
        setFiltroAlunos(
            filmes.filter(filme => {
                return filme.name.toLowerCase().includes(busca.toLocaleLowerCase())
            })
        )
    }, [busca]) //deixa os elementos escondidos so tira o filmes daqui

    return (     
        <div>
            <Menu />
            <div className="main-harry">
                <img className="capa" src={Harry} alt="Imagem da turma do Harry Potter" />
                <h1> Harry Potter</h1>
                <input className="buscar" onChange={e => {setBusca(e.target.value)}} placeholder="Digite o nome de um Aluno" type="" /> 
                {filtroAlunos.map(filme => (
                    <li  key={filme.name}>
                    Nome: {filme.name}<br />
                    Casa: {(filme.house.length > 0) ? filme.house : 'Sem Casa'}<br/>
                    Especies: {filme.species}<br/>
                    <img src={filme.image} width="200px" height="200px" alt={filme.name}/>
                </li>
                ))} 
            </div>  
            <Footer />                             
        </div>
    )
}

export default Serie

