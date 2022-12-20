/* eslint-disable import/no-anonymous-default-export */
import "./Mega.css"
import React, { useState } from "react"

export default props => {
    const [quantidade, setQuantidade] = useState(props.quantidade || 6)
    const [minimo, setMinimo] = useState(props.minimo || 1)
    const [maximo, setMaximo] = useState(props.maximo || 100)

    function gerarNumeroNaoContido(minimo, maximo, array){
        let numero = parseInt(Math.random() * (maximo + 1 - minimo)) + minimo
        return array.includes(numero) ? gerarNumeroNaoContido(minimo, maximo, array) : numero;
    }

    function gerarNumeros(quantidade, minimo, maximo) {
        if (maximo - minimo < quantidade-1)
            return undefined

        const numeros = Array(quantidade)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(minimo, maximo, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros.toString().replaceAll(',',', ')
    }
    
    function onChangeQuantidade(e) {
        setQuantidade(+e.target.value)
    }

    function onChangeMinimo(e) {
        setMinimo(+e.target.value)
    }

    function onChangeMaximo(e) {
        setMaximo(+e.target.value)
    }

    function gerar(e){
        setNumerosGerados(gerarNumeros(quantidade, minimo, maximo))
    }

    const [numerosGerados, setNumerosGerados] = useState(gerarNumeros(quantidade, minimo, maximo))


    return (
        <div className="Mega">
            <h2>Megasena</h2>
            <label htmlFor="qtd">Quantidade: </label>
            <input id="qtd" type="number" value={quantidade} onChange={onChangeQuantidade}/>
            <br/><label htmlFor="min">Minimo: </label>
            <input 
                id="min"
                type="number"
                min="6"
                max="15"
                value={minimo}
                onChange={onChangeMinimo}/>
            <br/><label htmlFor="max">Maximo: </label>
            <input id="max" type="number" value={maximo} onChange={onChangeMaximo}/>
            <br/><button onClick={gerar}><strong>Gerar Novos Numeros</strong></button>
            <br/><strong>{numerosGerados}</strong>
        </div>
    )
}