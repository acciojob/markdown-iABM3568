import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const html = markdown
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/\n/g, "<br>");

    setPreview(html);
  }, [markdown]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
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
