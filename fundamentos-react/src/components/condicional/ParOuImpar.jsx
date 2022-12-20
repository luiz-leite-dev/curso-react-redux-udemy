/* eslint-disable import/no-anonymous-default-export */
export default props => {
    const ehPar = props.numero % 2 === 0
    return <div> { 
        ehPar ? 
            <span>Par</span> :
            <span>Ímpar</span>
    }
    </div>
}