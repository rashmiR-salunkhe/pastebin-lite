import { kv } from "@vercel/kv";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  try {
    const { content, maxViews } = await req.json();

    if (!content) {
      return new Response("Content is required", { status: 400 });
    }

    const id = nanoid(8);

    await kv.set(`paste:${id}`, {
      content,
      views: 0,
      maxViews: maxViews ?? null,
    });

    return Response.json({ id });
  } catch (err) {
    return new Response("Internal Server Error", { status: 500 });
  }
}