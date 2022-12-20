/* eslint-disable import/no-anonymous-default-export */
import If, {Else} from './If'

export default props => {
    const usuario = props.usuario || {}
    return <div>
        <If condicional={usuario && usuario.nome}>
            Seja bem vindo <strong>{ usuario.nome }</strong>!
            <Else>
                Seja bem vindo <strong>Amigão</strong>!
            </Else>
        </If>
    </div>
}