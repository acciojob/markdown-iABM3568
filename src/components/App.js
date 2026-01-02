import React, { useState, useEffect } from "react";

const App = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let html = markdown
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/\n/g, "<br>");

    setPreview(html);
    setLoading(false);
  }, [markdown]);

  return (
    <div className="app" style={{ display: "flex", height: "100vh" }}>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{ width: "50%" }}
      />

      <div style={{ width: "50%", padding: "20px" }}>
        {loading && <div className="loading">Loading...</div>}

        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: preview }}
        />
      </div>
    </div>
  );
};

export default App;
