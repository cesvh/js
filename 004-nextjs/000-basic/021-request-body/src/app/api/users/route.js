import { NextResponse } from "next/server";

export function GET() {
    // return new Response("Hello world"); // Primer alternativa
    // return NextResponse.json("Hello world");

    // extracct params
    // query database
    // comunicate with others services
    return NextResponse.json({
        message: "obteniendo datos"
    });
}

export async function POST(request){
    // console.log(await request.json()); // { name: 'ces', team: 'lux' }
    const { name, team } = await request.json();
    // console.log(`${name} - ${team}`); // ces - lux
    return NextResponse.json({
        "message": `${name} - ${team}`
    });
}

export function PUT(){
    return NextResponse.json({
        message: "actualizando datos"
    });
}

export function DELETE(){
    return NextResponse.json({
        message: "eliminando datos"
    });
}
