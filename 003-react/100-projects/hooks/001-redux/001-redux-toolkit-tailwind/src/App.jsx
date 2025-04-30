// import './App.css';
// import { BrowserRouters, Routes, Route } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import NotFound from './components/NotFound';
// useDispatch: Acciones
// useSelector: Traer el estado de redux

function App() {

  return (
    <div className='bg-zinc-900 h-screen text-white'>
      <div className="flex items-center justify-center h-full">
        <Router>
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/create-task' element={<TaskForm />} />
            <Route path='/edit-task/:id' element={<TaskForm />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
