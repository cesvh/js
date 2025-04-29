import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// useDispatch: Acciones
// useSelector: Traer el estado de redux

function App() {

  return (
    <>
      <div className='App'>
        <h1>Welcome to the App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </>
  )
}

export default App
