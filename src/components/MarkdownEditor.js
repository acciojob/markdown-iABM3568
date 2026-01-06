
import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (markdown.startsWith("# ")) {
        setPreview(`<h1>${markdown.replace("# ", "")}</h1>`);
      } else {
        setPreview(`<p>${markdown}</p>`);
      }
      setLoading(false);
    }, 0);
  }, [markdown]);

  return (
    <div className="app" style={{ display: "flex", height: "100vh" }}>
      {loading && <div className="loading">Loading...</div>}

      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{ width: "50%" }}
      />

      <div
        className="preview"
        style={{ width: "50%", padding: "20px" }}
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </div>
  );
};

export default MarkdownEditor;
