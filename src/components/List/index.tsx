import style from './list.module.scss'
import Item from './Item';
import { Task } from '../../types/task';

interface Props {
    tasks: Task[],
    selectTask: (selectedTask: Task) => void
}

const List = ({ tasks, selectTask }: Props) => {

    return (  
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
            }}>Today's tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <Item 
                        key={task.id}
                        selectTask={selectTask}
                        {...task} 
                    />
                ))}
            </ul>
        </aside>
    );
}
 
export default List;