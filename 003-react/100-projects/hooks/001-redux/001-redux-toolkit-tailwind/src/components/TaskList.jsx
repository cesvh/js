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
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>No. de tareas: {tasksState.length}</h1>
        <Link to="/create-task" className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">Agregar Tarea</Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasksState.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <Link to={`/edit-task/${task.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md">Editar</Link>
                <button onClick={() => handleDelete(task.id)} className="bg-zinc-600 px-2 py-1 text-xs rounded-md">Eliminar</button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList