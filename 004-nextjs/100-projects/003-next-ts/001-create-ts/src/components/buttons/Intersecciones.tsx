"use client"

import { ComponentPropsWithoutRef } from "react"
// interface Props extends ComponentPropsWithoutRef<"button"> {
//     dark?: boolean;
//     variant?: "primary" | "secondary";
// };
// interface ButtonProps extends Props {
//     url?: string;
// };
type Props = ComponentPropsWithoutRef<"button">;
type ButtonProps = Props & {
    dark?: "red";
    variant?: "primary" | "secondary";
};

function Button( { dark, variant, children }: ButtonProps ) {
    return <button style={{color: dark}} value={variant}>{children}</button>
}

function Intersecciones() {
  return (
    <div>
        <Button><div>Intersección</div></Button>
    </div>
  )
}

export default Intersecciones