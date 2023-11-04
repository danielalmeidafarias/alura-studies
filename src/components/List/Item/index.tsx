import { Task } from '../../../types/task';
import style from './item.module.scss'

interface Props extends Task{
    selectTask: (selectedTask: Task) => void
}

const Item = (
    {
        task, 
        time, 
        selected, 
        completed, 
        id, 
        selectTask
    }: Props) => {

    return (  
        <li 
            onClick ={() => !completed && selectTask(
            {
                task,
                time, 
                selected,
                completed,
                id
            }
        )}
        className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`}>
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && 
                <span 
                aria-label='task completed'
                className={style.concluido}></span>
            }
        </li>
    );
}
 
export default Item;