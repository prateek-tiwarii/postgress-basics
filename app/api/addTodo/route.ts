import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";


const client = new PrismaClient();




export async function POST(req : NextRequest , res : NextResponse){

    try{

        const {title  ,desc , completed} = req.json();

        if(!title || !desc || ! completed){
           return NextResponse.json({message : "all fields are required"} , {status : 400});
        }

        const todo = await client.todo.create({
            data:{
                title,
                desc,
                completed
            }
        })

        return NextResponse.json(todo , {status : 201});
    }catch(err){
        return NextResponse.json({message : "Internal server error"} , {status : 500});
    }

 


}