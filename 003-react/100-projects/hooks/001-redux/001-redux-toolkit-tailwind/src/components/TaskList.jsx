import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {
    console.log('TaskList');
    const tasksState = useSelector((state) => state.tasks);
    console.log(tasksState);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteTask(id));
    };

  return (
    <div>
      <header>
        <h1>No. de tareas: {tasksState.length}</h1>
        <Link to="/create-task">Agregar Tarea</Link>
      </header>
      {tasksState.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Eliminar</button>
          <Link to={`/edit-task/${task.id}`}>Editar</Link>
        </div>
      ))}
    </div>
  );
}

export default TaskList