import { useState } from 'react'
import './style.css'
export default function BarraDePesquisa(){
    const [termoPesquisa, setTermoPesquisa] = useState('');
    return (
        <input 
        type='search' 
        className='barraDePesquisa' 
        placeholder="Digite o que você procura"
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)} />
    )
}