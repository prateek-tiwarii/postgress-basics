import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function PUT(req : NextRequest , res : NextResponse){

    try{
        const {id , title  ,desc } = await req.json();

        if(!id ){
            return NextResponse.json({message : "id is required"} , {status : 400});
        }

        const data: any = {};

        if(title !== undefined) data.title = title;
        if(desc !== undefined) data.desc = desc;
        

        const todo = await client.todo.update({
            where: {id},
        })
    }
}