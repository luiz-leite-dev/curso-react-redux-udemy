/* eslint-disable import/no-anonymous-default-export */
import DiretaFilho from "./DiretaFilho"

export default props => {
    return <div>
        <DiretaFilho nome="Josue" idade={20} nerd={true} />
        <DiretaFilho nome="Amanda" idade={12} nerd={false} />
    </div>
}