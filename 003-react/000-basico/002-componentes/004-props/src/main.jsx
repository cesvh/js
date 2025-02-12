import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './index.css'
// import App from './App.jsx'
import { Header } from './Components/header'; // export function Header(props){
import Body from './Components/body'; // export default function Body(props){
import Footer from './Components/footer'; // export default Footer; // function Footer(

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <Header 
            title='Regex' 
            description='Expresiones regulares' />
        <Body 
            firstParagraph='Aquél que alcanzó a ver lo profundo. Aquél que fue sabio en todos los aspectos. Gilgamesh'
            whatIs='Regex'
            uses='Usos reales de las expresiones regulares'
            examples='Usos de scraping'
            datoNumero={299}
            datoBool={true}
            datoArray={[2, 9, 9, 2, 7, 9, [4, 5, 8]]}
            datoObjeto={{
                a:'aaa',
                b: 299,
                c: {
                    a: [1, 9, 6, 4]
                }
            }}
            myFunction={ function () { console.log('Hey'); }} />
        <Footer 
            endPhrase = 'Si tienes 1 problema y lo quieres resolver con expresiones regulares entonces tienes 2 problemas.'/>
    </>
);
