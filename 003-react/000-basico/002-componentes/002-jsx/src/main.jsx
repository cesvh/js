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

function Main() {
    function Light(divide) {
        return 299792458 / divide;
    }
    return <p>Velocidad de a luz: {Light(1000)}</p>
}

root.render(
    <>
        <Main />
        <Main />
        <Main />
    </>
);
