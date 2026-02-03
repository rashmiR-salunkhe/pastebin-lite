import { kv } from "@vercel/kv";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  try {
    const { content } = await req.json();

    if (!content) {
      return new Response("Content is required", { status: 400 });
    }

    const id = nanoid(8);

    // save paste
    await kv.set(`paste:${id}`, content);

    // return id
    return Response.json({
      success: true,
      id,
    });
  } catch (error) {
    console.error("POST /api/pastes error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}