import { PrismaClient } from "@prisma/client/extension";

const client = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req : NextRequest , res : NextResponse){

    try{
        const {id} = req.json();

        if(!id){
            return NextResponse.json({message : "id is required"} , {status : 400});
        }

        const todo =  await client.todo.delete({
            where: {id}
        })

        return NextResponse.json(todo , {status : 200});
    }catch(err){
        return NextResponse.json({message : "Internal server error"} , {status : 500});
    }
}