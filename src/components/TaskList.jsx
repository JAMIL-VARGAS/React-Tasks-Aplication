import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {
    // USANDO EL CONTEXT
    const {tasks} = useContext(TaskContext)
    // VALIDAMOS QUE EXISTAN TAREAS DENTRO DEL ARRAY
    if(tasks.length === 0){
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aún...</h1>
    }
    return (
        <div className = "grid grid-cols-4 gap-2">
            {
                tasks.map( (task) => (
                   <TaskCard key={task.id} task={task} />
                ))
            }
        </div>
    )
}

export default TaskList