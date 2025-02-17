// Esta forma se usa en main.jsx

import { createContext, useState, useEffect } from "react";
import { tasks as myDatas } from '../datas/tasks';

// Nombre del contexto
export const TaskContext = createContext();

// Contenedor // Compornente que engloba a resto de componentes
export function TaskContextProvider(props) {

    const [myTasks, setMyTasksList] = useState([]);
    let x = 0; // Va a poder ser accedida
    useEffect(() => {
        setMyTasksList(myDatas);
    }, []);

    const addTask = (title, description) =>  {
        setMyTasksList([...myTasks, { title, description, id: myTasks.length }]);
    };

    const deleteTask = (id) => {
        const deleteTask = myTasks.filter( task => task.id !== id);
        setMyTasksList(deleteTask);
    };
    return(
        <TaskContext.Provider value={{myTasks, addTask, deleteTask}}>
            {props.children}
        </TaskContext.Provider>
    );
}

// // Se puede usar en Taskcard.jsx
// function TaskContext(props) {
//     return (
//         <>
//             <h1>Componente Context</h1>
//             {props.children}
//         </>
//     );
// }

// export default TaskContext;