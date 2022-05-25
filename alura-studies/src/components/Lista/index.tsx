import Item from './Item';
import style from './lista.module.scss';

function Lista() {
    //criação da lista tarefas
    const tarefas = [
        {
            nome: 'React',
            tempo: '02:00:00'
        },
        {
            nome: 'JavaScript',
            tempo: '01:00:00'  
        },
        {
            nome: 'TypeScript',
            tempo: '03:00:00'  
        }

    ]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {/* tarefas.map roda a lista e renderiza o html a cada ocorrencia pela lista */}
                {tarefas.map((item, index)=>(
                   <Item
                   key={index}
                    tarefa= {item.nome} 
                    tempo={item.tempo}
                   />
                ))}
            </ul>
        </aside>
    );
}
export default Lista;