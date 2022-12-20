import "./Contador.css"
import React, { Component } from "react";

import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

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

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }
    
    render() {
        return (
            <div className="Contador">
                <h2>Contador 2</h2>
                <p>Valor Inicial: { this.props.valorInicial }</p>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Display valor={this.state.valor}/>
                <Botoes incrementar={this.incrementar} decrementar={this.decrementar}/>
            </div>
        )
    }
}

export default Contador