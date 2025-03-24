"use client"

import { ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<"button">;

function Button( { value="Click Me!", onClick}: ButtonProps ) {
    return <button onClick={onClick}>{value}</button>
}

function TipadoProps() {
  return (
    <div>
        <Button
        value={"Haz Click"}
        onClick={ () => {console.log("Hey")}} />
    </div>
  )
}

export default TipadoProps