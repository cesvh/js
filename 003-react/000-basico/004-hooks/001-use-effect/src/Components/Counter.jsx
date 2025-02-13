import { useState, useEffect } from "react";

// useState: Administra los estados de los componentes.
// useEffect: Observador de los eventos de un componente o de todos.

export function Counter() {
    const [ iCounter, setCounter ] = useState(0);
    const [ iMensaje, setMensaje ] = useState("");

    // Se ejecuta en cada render de todos los componentes
    // useEffect(() => { console.log("Cambio de estado de algún componente"); });
    // Se ejecuta solo al inicio del render (componente o página)?
    // useEffect(() => { console.log("Se ejecuta una sola vez"); }, []);
    // Administra estado de un componente pasado como referencia. Se ejecuta al inicio y en todo momento ante cualquier render del componente.
    useEffect(() => { console.log('iCounter'); }, [iCounter]);

    return <>
        <h1>{ iCounter }</h1>
        <button onClick={() => { setCounter( iCounter + 1 ) }}>Aumentar</button>
        <button onClick={() => { setCounter( iCounter - 1 ) }}>Disminuir</button>
        <input onChange={(e) => { setMensaje(e.target.value) }} />
        <button onClick={() => console.log(iMensaje)}>Aceptar</button>
    </>;
};
