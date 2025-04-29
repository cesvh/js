import { useSelector } from "react-redux";

function TaskForm() {
    console.log('TaskForm');
    const tasksState = useSelector((state) => state.tasks);
    console.log(tasksState);
  return (
    <div>TaskForm</div>
  );
}

export default TaskForm