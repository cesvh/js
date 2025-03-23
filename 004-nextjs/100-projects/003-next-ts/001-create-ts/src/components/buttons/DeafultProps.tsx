"use client"

type ButtonProps = {
    title?: string;
    count?: number;
};

function Button( {title = "Texto Default"}: ButtonProps ) {
    return <button>{title}</button>
}

function DefaultProps() {
  return (
    <div>
        <Button />
    </div>
  )
}

export default DefaultProps