import { Prisma, PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest , res : NextResponse) {

    try{
        const todos = await client.todo.findmany()
    }

}