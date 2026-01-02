import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (markdown.startsWith("# ")) {
      setPreview(markdown.replace("# ", ""));
    } else {
      setPreview(markdown);
    }
  }, [markdown]);

  return (
    <>
      {/* loading MUST exist */}
      <div className="loading"></div>

      <div className="app" style={{ display: "flex", height: "100vh" }}>
        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          style={{ width: "50%" }}
        />

        <div
          className="preview"
          style={{
            width: "50%",
            padding: "20px",
            fontSize: "32px",
            fontWeight: "bold"
          }}
        >
          {preview}
        </div>
      </div>
    </>
  );
};

export default MarkdownEditor;
