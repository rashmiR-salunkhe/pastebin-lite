import { kv } from "@vercel/kv";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const content = await kv.get(`paste:${params.id}`);

    if (!content) {
      return new Response("Not found", { status: 404 });
    }

    return Response.json({ content });
  } catch (err) {
    console.error("GET paste error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}