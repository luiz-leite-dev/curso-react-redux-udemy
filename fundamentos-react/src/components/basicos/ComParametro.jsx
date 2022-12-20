export default function ComParametro(props){
    //Propriedades são somente leitura
    const status = props.nota >= 7 ? 'Aprovado' : 'em Recuperação'
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno } </strong>
                com a nota
                <strong> { props.nota.toFixed(1) } </strong>
                está
                <strong> { status }</strong>
            </p>
        </div>
    )
}