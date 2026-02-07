type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PastePage({ params }: PageProps) {
  // ✅ unwrap params
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pastes/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <div>Paste not found</div>;
  }

  const paste = await res.json();

  return (
    <main>
      <h1>Paste</h1>
      <pre>{paste.content}</pre>
    </main>
  );
}