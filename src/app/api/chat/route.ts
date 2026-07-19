import { NextResponse } from "next/server";
import { answerQuestion } from "@/lib/chat";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { message?: string };
    const message = body.message?.slice(0, 1000) ?? "";
    const reply = await answerQuestion(message);
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { reply: "Something went wrong. Please try again in a moment." },
      { status: 500 },
    );
  }
}
