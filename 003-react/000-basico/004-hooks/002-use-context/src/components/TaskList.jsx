import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
    const { myTasks } = useContext(TaskContext);
    if(myTasks.length === 0) return <h3>No hay tareas</h3>;
    return (
        <div>
            { myTasks.map((row) => (
                <TaskCard 
                    key={row.id} 
                    task={row} />
            ))}
        </div>
    );
}

export default TaskList;
