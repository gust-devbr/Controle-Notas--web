import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [rows] = await db.query("SELECT * FROM subjects");
        return NextResponse.json(rows);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Erro ao buscar matérias" },
            { status: 500 }
        )
    }
};

export async function POST(req: Request) {
    const body = await req.json();
    const { name, grade1, grade2 } = body;

    const average = (grade1 + grade2) / 2;

    await db.query(
        "INSERT INTO subjects (name, grade1, grade2, average) VALUES (?, ?, ?, ?)",
        [name, grade1, grade2, average]
    )

    return NextResponse.json({ message: "Matéria criada" });
};