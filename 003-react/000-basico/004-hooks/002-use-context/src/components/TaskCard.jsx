// import TaskContext from "../context/TaskContext";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext"; // Acceso al contexto

function TaskCard({task}) {
    const { deleteTask } = useContext(TaskContext);

    return (
        // <TaskContext> // Al importar el TaskContext todo el contenido de este compornte se mostrara debajo del H1 de TaskContext
            <div>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                <button 
                    onClick={() => deleteTask(task.id)} >
                    Eliminar Tarea...
                </button>
            </div>
        // </TaskContext>
    );
}

export default TaskCard;
