import { connectStr } from "@/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Sports } from "@/lib/model/sport";

export async function GET() {
    await mongoose.connect(connectStr);
    const data = await Sports.find();
    console.log(data);
    return NextResponse.json(data);
}