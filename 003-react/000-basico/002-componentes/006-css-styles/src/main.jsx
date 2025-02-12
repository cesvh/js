import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import { Card1 } from './Components/Card1';
import { Card2 } from './Components/Card2';
import { Card3 } from './Components/Card3';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <div>
            <Card1 
                flag={true} 
                title='El problema de los 3 cuerpos' 
                content='La física no existe, nunca ha existido y nunca existirá' />
            <br />
            <Card2
                flag={true} 
                title='El bosque oscuro' 
                content='Axiomas de las sociologías cósmicas' />
            <br />
            <Card3
                flag={true} 
                title='El fin de la muerte' 
                content='La física no existe, nunca ha existido y nunca existirá' />
        </div>
    </>
);
