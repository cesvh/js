import { useState, useEffect } from 'react';
import { tasks as myDatas } from './datas/tasks';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    const [myTasks, setMyTasksList] = useState([]);
    
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

    return (<>
        <TaskForm 
            addTask={addTask} />
        <TaskList 
            myTasks={myTasks}
            deleteTask={deleteTask} />
    </>);
}

export default App;
