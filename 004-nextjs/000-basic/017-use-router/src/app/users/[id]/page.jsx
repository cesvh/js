"use client";
import { useParams } from "next/navigation";

function UsersId() { // UsersId({params})
    // console.log( await params); // {id: '1'}
    const params = useParams(); // {id: '1'}
    // console.log(params.id);
    return <div>Params id: {params.id}</div>;
}

export default UsersId;