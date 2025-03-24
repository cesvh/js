"use client"

// type Color = "red" | "blue" | "green";
// type ButtonProps = {
//     title?: string;
//     count?: number;
//     color: Color;
// };

type Color = "red" | "blue" | "green";
interface ButtonProps {
    title?: string;
    count?: number;
    color?: Color;
};

function Button( {title = "Interface", count = 0, color = "red"}: ButtonProps ) {
    return <button>{title} - {count} - {color}</button>
}

function Interfaces() {
  return (
    <div>
        <Button />
    </div>
  )
}

export default Interfaces