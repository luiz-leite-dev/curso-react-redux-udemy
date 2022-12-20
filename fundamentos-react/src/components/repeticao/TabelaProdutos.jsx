/* eslint-disable import/no-anonymous-default-export */
import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default props => {
    function getProdutosRegistros() {
        return produtos.map((produto, i) => {
            return <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td>{ produto.id }</td>
                <td>{ produto.nome }</td>
                <td style={{textAlign: 'right'}}>R$ { produto.preco.toFixed(2) }</td>
            </tr>
        })
    }
    return <div className="TabelaProdutos">
        <table>
            <thead>
                <tr>    
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                { getProdutosRegistros() }
            </tbody>
        </table>
    </div>
}