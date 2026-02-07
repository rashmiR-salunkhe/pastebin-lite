"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [content, setContent] = useState("");
  const [maxViews, setMaxViews] = useState("");
  const router = useRouter();

  const createPaste = async () => {
    const res = await fetch("/api/pastes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        maxViews: maxViews ? Number(maxViews) : null,
      }),
    });

    if (!res.ok) {
      alert("Failed to create paste");
      return;
    }

    const data = await res.json();

    // ✅ THIS IS THE MISSING PART
    router.push(`/p/${data.id}`);
  };

  return (
    <main>
      <h1>Pastebin Lite</h1>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        cols={80}
      />

      <div>
        <input
          placeholder="Max views"
          value={maxViews}
          onChange={(e) => setMaxViews(e.target.value)}
        />
      </div>
    <button onClick={createPaste}>
        Create Paste
      </button>
    </main>
  );
}