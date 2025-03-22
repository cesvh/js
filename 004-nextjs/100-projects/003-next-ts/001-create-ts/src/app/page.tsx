const title: string = "Texto title";

type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: string;
}

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

function Page() {
  return (
    <div>
      <Button text="Texto props" />
      <br /><br />
      <Button2 text="Texto props" subtitle="Subtítulo" color="red" />
      <br /><br />
      <Button3 text="Texto props" subtitle="Subtítulo" color="red" />
      <br /><br />
      <Button4 text="Texto props" subtitle="Subtítulo" />
    </div>
  )
}

export default Page;