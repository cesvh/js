import { NextResponse } from "next/server";

export async function GET( request, { params } ){
    // console.log(await params);
    // console.log(users_json);
    const { id } = await params;
    console.log(id);
    const users_res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const users_json = await users_res.json();
    return NextResponse.json(users_json);
}
