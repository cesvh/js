import TaskCard from "./TaskCard";

function TaskList({ myTasks, deleteTask }) {
    if(myTasks.length === 0) return <h3>No hay tareas</h3>;
    return (
        <div>
            { myTasks.map((row) => (
                <TaskCard 
                    key={row.id} 
                    task={row} 
                    deleteTask={deleteTask} />
            ))}
        </div>
    );
}

export default TaskList;
