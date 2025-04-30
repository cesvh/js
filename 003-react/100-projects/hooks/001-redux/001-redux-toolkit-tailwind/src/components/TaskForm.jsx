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
  }, [params.id, tasksState]);
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
      <div className="">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">{params.id ? "Editar Tarea" : "Agregar Tarea"}</h1>
          <Link to="/">Ir a la lista</Link>
        </div>
        <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 mb-2">
          <label htmlFor="title" className="block text-sm font-bold">Título</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              placeholder="Título" 
              onChange={handleChange} 
              value={task.title} 
              className="w-full p-2 rounded-md bg-zinc-600 mb-2"/>
          <label htmlFor="description" className="block text-sm font-bold">Descripción</label>
            <textarea 
              id="description" 
              name="description" 
              placeholder="Descripción" 
              onChange={handleChange} 
              value={task.description} 
              className="w-full p-2 rounded-md bg-zinc-600 mb-2"></textarea>
          <button type="submit" className="bg-indigo-600 px-2 py-1 rounded-md text-white">{params.id ? "Editar Tarea" : "Agregar Tarea"}</button>
        </form>
      </div>
    </>
  );
}

export default TaskForm