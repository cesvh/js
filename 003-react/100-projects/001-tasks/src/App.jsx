import { useState } from 'react'
import { tasks as myDatas } from './datas/tasks';
import { useEffect } from 'react';
console.log(myDatas);

function App() {
    // Al no inicializar: Uncaught TypeError: myTasks is undefined
    const [myTasks, setMyTasksList] = useState([]);
    useEffect(() => {
        console.log("useEffect - []");
        setMyTasksList(myDatas);
    }, []); // Se ejecuta un sola vez al inicio del render
    if(myTasks.length === 0) {
        return <h3>No hay tareas</h3>
    }
    return (
    <>
        <form>
            <input
                id="title"
                name="title"
                placeholder="Escribe la tarea"
                autoFocus />
            <br /><br />
            <input
                id="description"
                name="description"
                placeholder="Describe la tarea" />
            <br /><br />
            <button>Guardar Tarea</button>
        </form>
        <div>
            { myTasks.map((row) => (
                <div key={row.id} >
                    <h3>{row.title}</h3>
                    <p>{row.description}</p>
                    <button>
                        Eliminar Tarea
                    </button>
                </div>
            ))}
        </div>
    </>
  )
}

export default App
