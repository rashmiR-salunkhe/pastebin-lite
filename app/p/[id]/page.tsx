interface PageProps {
  params: { id: string };
}

export default async function PastePage({ params }: PageProps) {
  const { id } = params;

  const res = await fetch(`/api/pastes/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Paste not found</div>;
  }

  const data = await res.json();

  return (
    <pre style={{ whiteSpace: "pre-wrap" }}>
      {data.content}
    </pre>
  );
}