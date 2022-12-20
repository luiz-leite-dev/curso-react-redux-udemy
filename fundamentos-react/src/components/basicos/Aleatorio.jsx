/* eslint-disable import/no-anonymous-default-export */
export default props => {
    const { valorMaximo, valorMinimo } = props;
    const aleatorio = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo)
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor mínimo: </strong> {valorMinimo}
            </p>
            <p>
                <strong>Valor máximo: </strong> {valorMaximo}
            </p>
            <p>
                <strong>Valor escolhido: </strong> {aleatorio}
            </p>
        </div>
    )
}