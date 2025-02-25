import { NextResponse } from "next/server";

export async function GET( request, { params } ){
    // console.log(await params);
    // console.log(users_json);
    const { id } = await params;
    console.log(id); // 2
    // console.log(new URL(request.url).searchParams); // URLSearchParams { 'name' => 'ces', 'team' => 'lux' }
    const { searchParams } = new URL(request.url); // URLSearchParams { 'name' => 'ces', 'team' => 'lux' }
    // console.log(searchParams);
    console.log(searchParams.get("name")); // ces
    console.log(searchParams.get("team")); // lux
    const users_res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const users_json = await users_res.json();
    return NextResponse.json(users_json);
}
