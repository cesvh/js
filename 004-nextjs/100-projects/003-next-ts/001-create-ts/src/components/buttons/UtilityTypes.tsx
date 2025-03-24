"use client"

import { useRef, useState } from "react"

type User = {
    name: string;
    age: number;
    password: string;
    email: string;
};
type UserWithOutPassword = Omit<User, "password" | "email">; // Quita propiedades dadas
type UpdateUser = Partial<User>; // Propiedades dadas
type UserPublicData = Pick<User, "name" | "email">; // Obtiene propiedades dadas
type OptionalUserWithOutPassword = Partial<Omit<User, "password">>; // Opcionales sin password
type Status = "active" | "inactive" | "pending" | "bloqued";
type AllowedStatus = Exclude<Status, "inactive" | "pending">; // Excluye

function Button() {
    const [user, setUser] = useState<User|null>(null);
    const myButton = useRef<HTMLButtonElement>(null);

    console.log(`${user?.name} - ${user?.age}`);

    return <button ref={myButton}>TypeHooks</button>
}

function UtilityTypes() {
  return (
    <div>
        <Button><div>Intersección</div></Button>
    </div>
  )
}

export default UtilityTypes