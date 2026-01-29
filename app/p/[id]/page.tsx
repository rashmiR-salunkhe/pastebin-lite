import { notFound } from "next/navigation";
import { storage, Paste } from "@/lib/storage";

export default async function PastePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // 👈 IMPORTANT

  const paste: Paste | null = await storage.get(`paste:${id}`);

  if (!paste) notFound();

  return (
    <main style={{ padding: "20px" }}>
      <h2>Paste</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {paste.content}
      </pre>
    </main>
  );
}
