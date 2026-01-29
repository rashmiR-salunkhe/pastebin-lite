import { redis } from "@/lib/redis";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  const body = await req.json();
  const id = nanoid();

  await redis.set(`paste:${id}`, body);

  return Response.json({ id });
}
