export async function POST(req: Request) {
  try {
    const body = await req.json();

    const url = new URL("/pipeline", req.url);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("POST /api/pastes error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}