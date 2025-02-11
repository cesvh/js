import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {
  return <div>
    <h1>Hola Mundo con un H1</h1>
    <p>Soy un párrafo</p>
  </div>
}

// root.render(Greeting());

// root.render(
// 	<div>
// 		{ Greeting() }
// 		{ Greeting() }
// 	</div>
// );

root.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>
);
