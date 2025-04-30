import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, Link, useParams } from "react-router-dom";

function TaskForm() {
  const params = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasksState = useSelector((state) => state.tasks);
  useEffect(() => {
    if(params.id) {
      const taskFound = tasksState.find((task) => task.id === params.id);
      if(taskFound) {
        setTask(taskFound);
      }
    }
  }, []);
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({
        ...task,
        id: uuidv4(),
        completed: false,
      }));
    }
    navigate("/");
  };

  return (<>
      <header>
        <h1>No. de tareas: {tasksState.length}</h1>
        <Link to="/">Home</Link>
      </header>
    <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="title" 
          name="title" 
          placeholder="Título" 
          onChange={handleChange} 
          value={task.title} />
        <textarea 
          id="description" 
          name="description" 
          placeholder="Descripción" 
          onChange={handleChange} 
          value={task.description}></textarea>
      <button type="submit">Agregar Tarea</button>
    </form>
  </>
  );
}

export default TaskForm