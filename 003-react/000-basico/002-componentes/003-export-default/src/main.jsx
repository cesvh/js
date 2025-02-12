import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// function Blog(){ // export default Blog;
// export function Title(){ // export function Title(){
import Blog, { Title, Content } from './Components/Blog';
// export function User(){ 
// export function Login(){
import { User, Login } from './Components/User';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <User />
        <Login />
        <Blog />
        <Title />
        <Content />
    </>
);
