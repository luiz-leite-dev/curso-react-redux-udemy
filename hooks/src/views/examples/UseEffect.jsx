import React, {useState} from 'react'
import { useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n -1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [evenOrOdd, setEvenOrOdd] = useState("-")
    const [value, setValue] = useState(0)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        if (fatorial > 1000000) {
            document.title = "Eita!!!"
        }
    }, [fatorial])

    useEffect(function(){
        setEvenOrOdd(value % 2 === 0 ? 'Par' : 'Ímpar')
    }, [value])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input 
                    type="number" 
                    className="input" 
                    value={number} 
                    onChange={e => setNumber(e.target.value)}
                />
            </div>
            <SectionTitle title="Exercício #02 - Desafio Par ou Ímpar"/>
            {/* 2 spans label e valor + input */}
            <div className="center">
                <div>
                    <span className="text">O número é: </span>
                    <span className="text red">{evenOrOdd}</span>
                </div>
                <input 
                    type="number" 
                    className="input" 
                    value={value} 
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseEffect
