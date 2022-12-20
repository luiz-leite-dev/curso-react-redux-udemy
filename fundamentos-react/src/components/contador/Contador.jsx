import "./Contador.css"
import React, { Component } from "react";

class Contador extends Component {

    state = {
        valor: this.props.valorInicial || 0,
        passo: this.props.passoInicial || 1,
    }

    incrementar = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value,
        })
    }
    
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <p>Valor Inicial: { this.props.valorInicial }</p>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input 
                        id="passoInput" 
                        type="number" 
                        value={this.state.passo} 
                        onChange={this.setPasso}/>
                </div>
                <p>Valor Atual: {this.state.valor}</p>
                <button onClick={this.decrementar}>-</button>
                <button onClick={this.incrementar}>+</button>
            </div>
        )
    }
}

export default Contador