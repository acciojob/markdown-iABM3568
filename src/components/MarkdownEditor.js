import React from "react";

const MarkdownEditor = ({ markdown, setMarkdown, preview }) => {
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
