import { useState } from 'react'
import { tasks as myDatas } from './datas/tasks';
import { useEffect } from 'react';

function App() {
    const [myTasks, setMyTasksList] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        setMyTasksList(myDatas);
    }, []);

    const addTask = (e) => {
        e.preventDefault();
        setMyTasksList([...myTasks, { title, description, id: myTasks.length }]);
        setTitle("");
        setDescription("");
    };

    const deleteTask = (id) => {
        const deleteTask = myTasks.filter( task => task.id !== id);
        setMyTasksList(deleteTask);
    };

    if(myTasks.length === 0) return <h3>No hay tareas</h3>;

    return (
    <>
        <form onSubmit={addTask}>
            <input
                id="title"
                name="title"
                placeholder="Escribe la tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus />
            <br /><br />
            <input
                id="description"
                name="description"
                placeholder="Describe la tarea"
                onChange={(e) => setDescription(e.target.value)}
                value={description} />
            <br /><br />
            <button>Guardar Tarea</button>
        </form>
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
    </>
  )
}

export default App
