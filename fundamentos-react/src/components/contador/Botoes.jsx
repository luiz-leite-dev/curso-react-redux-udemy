/* eslint-disable import/no-anonymous-default-export */
export default props => {
    return (
        <div>
            <button onClick={props.decrementar}>-</button>
            <button onClick={props.incrementar}>+</button>
        </div>
    )
}