function TaskList({ myTasks, deleteTask }) {
    if(myTasks.length === 0) return <h3>No hay tareas</h3>;
    return (
        <div>
            { myTasks.map((row) => (
                <div key={row.id} >
                    <h3>{row.id} - {row.title}</h3>
                    <p>{row.description}</p>
                    <button onClick={ () => deleteTask(row.id) }>
                        Eliminar Tarea
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
