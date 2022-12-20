/* eslint-disable import/no-anonymous-default-export */
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return <div>
        <If condicional={usuario && usuario.nome}>
            Seja bem vindo <strong>{ usuario.nome }</strong>!
        </If>
        <If condicional={!usuario || !usuario.nome}>
            Seja bem vindo <strong>Amigão</strong>!
        </If>
    </div>
}