import { useSelector } from "react-redux";

function TaskList() {
    console.log('TaskList');
    const tasksState = useSelector((state) => state.tasks);
    console.log(tasksState);
  return (
    <div>
      {tasksState.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList