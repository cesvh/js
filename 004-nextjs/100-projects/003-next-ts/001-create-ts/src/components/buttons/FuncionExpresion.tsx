import React from 'react'

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

function FuncionExpresion() {
  return (
    <>
        <Button3 text="Texto props" subtitle="Subtítulo" color="green" /><br /><br />
        <Button4 text="Texto props" subtitle="Subtítulo" color="green" padding={[22, 23]} />
    </>
  )
}

export default FuncionExpresion