import React, { useState, useEffect } from "react";
import MarkdownEditor from "./MarkdownEditor";

const App = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const html = markdown
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/\n/g, "<br>");

    setPreview(html);
    setLoading(false);
  }, [markdown]);

  return (
    <div className="app">
      {loading && <div className="loading">Loading...</div>}

      <MarkdownEditor
        markdown={markdown}
        setMarkdown={setMarkdown}
        preview={preview}
      />
    </div>
  );
};

export default App;
