import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, Link } from "react-router-dom";

function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasksState = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      ...task,
      id: uuidv4(),
      completed: false,
    }));
    navigate("/");
  };

  return (<>
      <header>
        <h1>Tareas {tasksState.length}</h1>
        <Link to="/">Home</Link>
      </header>
    <form onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" placeholder="Título" onChange={handleChange} />
        <textarea id="description" name="description" placeholder="Descripción" onChange={handleChange}></textarea>
      <button type="submit">Agregar Tarea</button>
    </form>
  </>
  );
}

export default TaskForm