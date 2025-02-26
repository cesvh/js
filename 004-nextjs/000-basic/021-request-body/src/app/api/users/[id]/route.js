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
    // Uso de datos del archivo .env
    console.log(process.env.TOKEN); // Qpa312888dhgdj3h4h69ddf44577fdfd
    console.log(process.env.SECRET_KEY); // T545456456guytyuvgvfdc5456JQIDJET557UQJED44
    const users_res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const users_json = await users_res.json();
    return NextResponse.json(users_json);
}
