"use client";

import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [views, setViews] = useState("");
  const [url, setUrl] = useState("");

  async function createPaste() {
    const res = await fetch("/api/pastes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        ttl_seconds: ttl ? Number(ttl) : undefined,
        max_views: views ? Number(views) : undefined,
      }),
    });

    const data = await res.json();
    setUrl(data.url);
  }

  return (
    <main style={{ padding: "24px", maxWidth: "700px" }}>
      <h1>Pastebin Lite</h1>

      {/* TEXTAREA */}
      <textarea
        placeholder="Enter your paste content here..."
        rows={8}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "12px",
        }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* INPUTS */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
        <input
          type="number"
          placeholder="TTL seconds"
          value={ttl}
          onChange={(e) => setTtl(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max views"
          value={views}
          onChange={(e) => setViews(e.target.value)}
        />
      </div>

      {/* BUTTON */}
      <button onClick={createPaste}>Create Paste</button>

      {/* RESULT */}
      {url && (
        <p style={{ marginTop: "16px" }}>
          Share URL:{" "}
          <a href={url} target="_blank">
            {url}
          </a>
        </p>
      )}
    </main>
  );
}
