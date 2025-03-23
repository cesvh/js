"use client"
import React from "react";
import Fundamentos from "@/components/buttons/Fundamentos";
import PropsTipados from "@/components/buttons/PropsTipados";
import Css from "@/components/buttons/Css";

type Color = "red" | "blue" | "green";
type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: Color;
  backgroundColor?: Color;
  sizes?: 30 | 40 | 50;
  padding?: [number, number, number?, number?];
}
type ButtonPropsRecordsTypes = {
  onClick: (text: string) => void;
  userAges: Record<"César" | "Cesar" | "Ces", number>;
};

const Button3 = (props: ButtonProps) => {
  return (
    <button>ArrayUnionType {props.text} - {props.subtitle} - {props.color}</button>
  )
}

const Button4: React.FC<ButtonProps> = (props) => {
  const {text, subtitle} = props;
  return (
    <button>ArrayUnionType {text} - {subtitle}</button>
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
      <Fundamentos text="Texto props" /><br /><br />
      <PropsTipados text="Texto props" subtitle="Subtítulo" color="red" /><br /><br />
      <Button3 text="Texto props" subtitle="Subtítulo" color="green" /><br /><br />
      <Button4 text="Texto props" subtitle="Subtítulo" padding={[22, 23]} /><br /><br />
      <Css style={{
        color: "black",
        backgroundColor: "gold",
        fontSize: "160px",
        padding: "20px"
      }} /><br /><br />
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