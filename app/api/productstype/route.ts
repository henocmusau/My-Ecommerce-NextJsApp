import { ProductType } from "@/models/mongo";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

    try {
        const datas = await ProductType.find()
        return NextResponse.json({ datas }, { status: 400 })
    } catch (error: any) {
        return NextResponse.json({ error }, { status: 400 })
    }
}

export async function POST(req: Request) {
    try {

    } catch (error: any) {

    }
}