/* eslint-disable import/no-anonymous-default-export */
export default props => {
    const onClick = props.quandoClicar
    const idadeMininma = 50
    const idadeMaxima = 70
    const gerarIdade = () => parseInt(Math.random() * (idadeMaxima - idadeMininma)) + idadeMininma
    const gerarNerd = () => Math.random() > 0.5
    return <div>
        <div>Filho</div>
        <button onClick={
            function (e) {
                onClick('Josue',53,true)
            }
        }>
            Fornecer Informações
        </button>
        <button onClick={_ => onClick('Josue',gerarIdade(),gerarNerd())}>
            Fornecer Informações 2
        </button>
    </div>
}