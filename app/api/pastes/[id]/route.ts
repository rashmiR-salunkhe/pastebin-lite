import { redis } from "@/lib/redis";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const paste = await redis.get(`paste:${params.id}`);

  if (!paste) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(paste);
}
