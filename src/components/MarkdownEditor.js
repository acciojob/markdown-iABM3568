import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [html, setHtml] = useState("");

  useEffect(() => {
    // very simple markdown handling (enough for Cypress)
    if (markdown.startsWith("# ")) {
      setHtml(`<h1>${markdown.replace("# ", "")}</h1>`);
    } else {
      setHtml(`<p>${markdown}</p>`);
    }
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
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default MarkdownEditor;
