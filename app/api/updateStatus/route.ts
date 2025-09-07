import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const clinet = new PrismaClient();

export async function PUT(req : NextRequest , res : NextResponse){

    try{
        const {id , completed} = await req.json();

        if(!id || completed === undefined){
            return NextResponse.json({message : "id and completed are required"} , {status : 400});
        }

        const todo = await clinet.todo.update({
            where: {id},
            data: {completed}
        })

        return NextResponse.json(todo , {status : 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message : "Internal Server Error"} , {status : 500});
    }
}