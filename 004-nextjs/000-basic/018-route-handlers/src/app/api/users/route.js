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

export function POST(){
    return NextResponse.json({
        message: "guardando datos"
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
