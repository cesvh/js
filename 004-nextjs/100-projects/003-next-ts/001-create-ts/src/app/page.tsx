"use client"

import React from "react";
import { text } from "stream/consumers";

const title: string = "Texto title";

type Color = "red" | "blue" | "green";

type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: Color;
  backgroundColor?: Color;
  sizes?: 30 | 40 | 50;
  padding?: [number, number, number?, number?];
}

type ButtonPropsCss = {
  style: React.CSSProperties;
}

type ButtonPropsRecordsTypes = {
  onClick: (text: string) => void;
  userAges: Record<"César" | "Cesar" | "Ces", number>;
};

function sumar(num1: number, num2: number): number {
  return num1 + num2;
}

function Button(props: { text: string }) {
  console.log(sumar(1, 2));
  return (
    <button>Button {title} - {props.text}</button>
  )
}

function Button2(props: { text: string, subtitle: string, color: string }) {
  return (
    <button>Button2 {props.text} - {props.subtitle} - {props.color}</button>
  )
}

const Button3 = (props: ButtonProps) =>{
  return (
    <button>Button3 {props.text} - {props.subtitle} - {props.color}</button>
  )
}

const Button4: React.FC<ButtonProps> = (props) => {
  const {text, subtitle} = props;
  return (
    <button>Button4 {text} - {subtitle}</button>
  )
}

function ButtonCss( {style}: ButtonPropsCss) {
  return (
    <button style={style}>
      Button CSS
    </button>
  )
}

function ButtonRecordsTypes( { onClick, userAges}: ButtonPropsRecordsTypes) {
  return (
    <button onClick={ (text) => onClick(`${text}`) }>
      {userAges.Ces}
    </button>
  )
}

function Page() {
  return (
    <div>
      <Button text="Texto props" />
      <br /><br />
      <Button2 text="Texto props" subtitle="Subtítulo" color="red" />
      <br /><br />
      <Button3 text="Texto props" subtitle="Subtítulo" color="green" />
      <br /><br />
      <Button4 text="Texto props" subtitle="Subtítulo" padding={[22, 23]} />
      <br /><br />
      <ButtonCss style={{
        color: "black",
        backgroundColor: "gold",
        fontSize: "160px",
        padding: "20px"
      }} />
      <br /><br />
      <ButtonRecordsTypes
        onClick= { () => {
          console.log(`Mi onClick`);
        }}
        userAges={{
          "César": 30,
          "Cesar": 40,
          "Ces": 50
        }} />
    </div>
  )
}

export default Page;