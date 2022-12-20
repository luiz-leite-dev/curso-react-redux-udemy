import './App.css'
import Mega from './components/mega/Mega'
import Contador2 from './components/contador/Contador2'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo2 from './components/condicional/UsuarioInfo2'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia2 from './components/basicos/Familia2'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card titulo="#13 - Desafio Megasena" color="#00A9D6">
                <Mega quantidade={7} minimo={1} maximo={60}/>
            </Card>

            <Card titulo="#12.1 - Classe Contador Componentizado" color="#29ABA4">
                <Contador2 valorInicial={10} passoInicial={5}/>
            </Card>

            <Card titulo="#12 - Classe Contador" color="#29ABA4">
                <Contador valorInicial={10} passoInicial={5}/>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#3A9AD9">
                {/* <UsuarioInfo2 usuario={{nome:"João"}}/> */}
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#354458">
                {/* <UsuarioInfo2 usuario={{nome:"João"}}/> */}
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#FFAC00">
                {/* <UsuarioInfo2 usuario={{nome:"João"}}/> */}
                <DiretaPai />
            </Card>

            <Card titulo="#08.2 - Renderização Condicional 3" color="#FF432E">
                {/* <UsuarioInfo2 usuario={{nome:"João"}}/> */}
                <UsuarioInfo2 />
            </Card>

            <Card titulo="#08.1 - Renderização Condicional 2" color="#FF85CB">
                <UsuarioInfo usuario={{nome:"Luiz"}}/>
                <UsuarioInfo />
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#53BBF4">
                <ParOuImpar numero={21}/>
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#75EB00">
                <TabelaProdutos/>
            </Card>

            <Card titulo="#06 - Repetição" color="#00C8F6">
                <ListaAlunos/>
            </Card>

            <Card titulo="#05.1 - Componente com Filhos 2" color="#088">
                <Familia2 sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia2>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#088">
                <Familia sobrenome="Silva"/>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio valorMaximo={100} valorMinimo={55} />
            </Card>

            <Card titulo="#03 - Fragmentos" color="#800">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Componente com Parâmetro" color="#008">
                <ComParametro
                    titulo="Segundo Componente"
                    aluno="Luiz Leite"
                    nota={10.0} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#f0f">
                <Primeiro />
            </Card>
        </div>
    </div>
);