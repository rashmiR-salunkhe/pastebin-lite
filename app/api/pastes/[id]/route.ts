import { kv } from "@vercel/kv";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const content = await kv.get(`paste:${id}`);

    if (!content) {
      return new Response("Not found", { status: 404 });
    }

    return Response.json({ content });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}