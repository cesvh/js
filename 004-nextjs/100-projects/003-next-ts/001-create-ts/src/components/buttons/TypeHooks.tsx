"use client"

import { useRef, useState } from "react"

type User = {
    name: string;
    age: number;
};

function Button() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Button");
    const [active, setActive] = useState(false);
    const [user, setUser] = useState<User|null>(null);
    const myButton = useRef<HTMLButtonElement>(null);

    console.log(`${user?.name} - ${user?.age}`);

    return <button ref={myButton}>TypeHooks</button>
}

function TypeHooks() {
  return (
    <div>
        <Button><div>Intersección</div></Button>
    </div>
  )
}

export default TypeHooks