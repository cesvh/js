"use client"

import { ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<"button">;

function Button( { onClick, ...rest}: ButtonProps ) {
    const handleClick = () => {
        if (onClick) {
            console.log("function Button");
        }
    }
    return <button onClick={handleClick} {...rest}>Button Spread</button>
}

function Spread() {
  return (
    <div>
        <Button
        value={"Button Spread"}
        style={{
            backgroundColor: "red",
            color: "black"
        }}
        onClick={ () => {console.log("Spread -> return -> div -> Button")}} />
    </div>
  )
}

export default Spread