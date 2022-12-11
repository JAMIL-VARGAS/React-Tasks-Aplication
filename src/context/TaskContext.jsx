import {createContext,useEffect,useState} from 'react'
import {tasks as data} from '../data/tasks'

// USAMOS EL CONTEXT PARA QUE EL ARBOL GENERAL TENGA LAS FUNCIONES ASI CUALQUIER COMPONENTE PUEDE ACCEDER A ESTAS FUNCIONES
export const TaskContext = createContext()

export function TaskContextProvider(props) {
    // Atajo useStateSnippet
    // CREAMOS UN STATE PARA MODIFICAR EL ESTADO DE LAS TAREAS
    const [tasks, setTasks] = useState([]);
    

    // EL ESTADO SE LLENARA CON EL ARRAY tasks osea data al cargar el componente
    useEffect(() => {
        setTasks(data)
    },[])

    // ESTA FUNCION HACE UN COPIA DEL ARREGLO Y LE AGREGA LA NUEVA TAREA CON SUS RESPECTIVOS VALORES
    function createTask(taskTitle,taskDescription){
      setTasks([...tasks,{
        title: taskTitle,
        // EL ID INCREMENTA CONFORME SE VAYA AGREGANDO
        id: tasks.length,
        description: taskDescription
      }])
    }

    function deleteTask(taskId){
      setTasks(tasks.filter( task => task.id != taskId))
    }
    
    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
