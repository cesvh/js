"use client"

import { ComponentPropsWithoutRef, MouseEvent } from "react"

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    dark?: "red";
    variant?: "primary" | "secondary";
};

function Button( {}: ButtonProps ) {
    const handleClick = ( e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> ) => {
        console.log(e.target);
    };
    // function handleClick( e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> ) {}

    return <button onClick={handleClick}>EventHandlers</button>
}

function EventHandlers() {
  return (
    <div>
        <Button><div>Intersección</div></Button>
    </div>
  )
}

export default EventHandlers