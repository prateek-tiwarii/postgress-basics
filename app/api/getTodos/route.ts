import { Prisma, PrismaClient } from "@prisma/client/extension";
import { Car } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest , res : NextResponse) {

    try{
        const todos = await client.todo.findmany();

        return NextResponse.json(todos , {status: 201});
    }
    catch(err){
        return NextResponse.json({message : "something went wrong"}, {status: 401})

    }

}