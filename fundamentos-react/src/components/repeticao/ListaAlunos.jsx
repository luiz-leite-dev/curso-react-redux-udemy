/* eslint-disable import/no-anonymous-default-export */
import alunos from '../../data/alunos'

export default props => {
    const alunosLista = alunos.map(aluno => {
        return <li key={aluno.id}>
            {aluno.id}. {aluno.nome} -> {aluno.nota}
        </li>
    })
    return (
        <div>
            <ul style={{listStyle: "none"}}>{alunosLista}</ul>
        </div>
    )
}