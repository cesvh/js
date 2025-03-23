"use client"
import React from "react";
import Fundamentos from "@/components/buttons/Fundamentos";
import PropsTipados from "@/components/buttons/PropsTipados";
import Css from "@/components/buttons/Css";
import RecordType from "@/components/buttons/RecordType";

type Color = "red" | "blue" | "green";
type ButtonProps = {
  text: string;
  subtitle: string;
  color: Color;
  backgroundColor?: Color;
  sizes?: 30 | 40 | 50;
  padding?: [number, number, number?, number?];
}

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

function Page() {
  return (
    <div>
      <Fundamentos text="Texto props" /><br /><br />
      <PropsTipados text="Texto props" subtitle="Subtítulo" color="red" /><br /><br />
      <Button3 text="Texto props" subtitle="Subtítulo" color="green" /><br /><br />
      <Button4 text="Texto props" subtitle="Subtítulo" color="green" padding={[22, 23]} /><br /><br />
      <Css style={{
        color: "black",
        backgroundColor: "gold",
        fontSize: "160px",
        padding: "20px"
      }} /><br /><br />
      <RecordType
        onClick= { () => { console.log(`Mi onClick`); }}
        userAges={{ "César": 30, "Cesar": 40, "Ces": 50 }} />
    </div>
  )
}

export default Page;