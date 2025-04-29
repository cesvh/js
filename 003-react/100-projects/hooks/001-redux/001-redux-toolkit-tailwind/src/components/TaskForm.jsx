import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuidv4 } from "uuid";

function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

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
  };




  return (
    <form onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" placeholder="Título" onChange={handleChange} />
        <textarea id="description" name="description" placeholder="Descripción" onChange={handleChange}></textarea>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm