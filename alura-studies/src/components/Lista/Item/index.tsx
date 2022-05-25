import style from '../lista.module.scss';

// Item({tarefa , tempo}: {tarefa : string, tempo: string}) = declaracao e tipagem das props
export default function Item({tarefa , tempo}: {tarefa : string, tempo: string}) {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}
