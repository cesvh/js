import { useSelector } from "react-redux";

function TaskList() {
    console.log('TaskList');
    const tasksState = useSelector((state) => state.tasks);
    console.log(tasksState);
  return (
    <div>TaskList</div>
  );
}

export default TaskList