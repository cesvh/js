import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}){
    const {id} = await params;
    const task = await prisma.task.findUnique({
        where: {
            id: Number(id)
        }
    })
    return NextResponse.json(task);
}

export async function PUT(request, {params}){
    try {
        const {id} = await params;
        const data = await request.json();
        console.log(data); // { title: 'arreglarse', description: 'vestirse y peinarse' }
        const task_updated = await prisma.task.update({
            where: {
                id: Number(id)
            },
            data: data
        });
        return NextResponse.json(task_updated);
    } catch (error) {
        return NextResponse.json(error.message);
    }
}

export async function DELETE(request, {params}){
    try {
        const {id} = await params;
        const task_removed = await prisma.task.delete({
            where: {
                id: Number(id)
            }
        })
        return NextResponse.json(task_removed);
    } catch (error) {
        return NextResponse.json(error.message);
    }
}
