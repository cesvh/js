function TaskCard({ row, deleteTask }) {
    // function eliminarTarea(){
    //     deleteTask(row.id)
    // }
    return (
        <div>
            <h1>{row.title}</h1>
            <p>{row.description}</p>
            <button 
                onClick={() => deleteTask(row.id)} >
                Eliminar Tarea
            </button>
        </div>
    );
}

export default TaskCard;
