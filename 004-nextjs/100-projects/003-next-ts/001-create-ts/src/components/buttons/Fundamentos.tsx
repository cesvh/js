import React from 'react'

const title: string = "Texto title";

function sumar(num1: number, num2: number): number {
    return num1 + num2;
}

function Fundamentos(props: { text: string }) {
    console.log(sumar(1, 2));
    return (
        <button>Fundamentos {title} - {props.text}</button>
    )
}

export default Fundamentos