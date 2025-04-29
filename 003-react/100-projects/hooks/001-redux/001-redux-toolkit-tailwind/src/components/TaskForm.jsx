import { useState } from "react";

function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
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