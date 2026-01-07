import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    // Simple conversion: # heading → <h1>heading</h1>
    if (markdown.startsWith("# ")) {
      setPreview(`<h1>${markdown.substring(2)}</h1>`);
    } else {
      setPreview(`<p>${markdown}</p>`);
    }
  }, [markdown]);

  return (
    <>
      <div className="loading"></div>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </>
  );
};

export default MarkdownEditor;
