import './App.css';
// import { BrowserRouters, Routes, Route } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import NotFound from './components/NotFound';
// useDispatch: Acciones
// useSelector: Traer el estado de redux

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<TaskForm />} />
          <Route path='/tasks' element={<TaskList />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
