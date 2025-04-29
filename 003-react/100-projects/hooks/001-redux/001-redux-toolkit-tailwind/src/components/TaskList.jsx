import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

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
      {tasksState.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList