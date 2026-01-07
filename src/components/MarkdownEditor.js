import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      // Convert markdown to HTML
      let html = markdown;
      
      // Handle headings (# Heading)
      html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
      html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
      html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
      
      // Handle bold (**text**)
      html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      
      // Handle italic (*text*)
      html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
      
      // Handle line breaks
      html = html.replace(/\n/g, '<br/>');
      
      setPreview(html);
      setLoading(false);
    }, 0);
  }, [markdown]);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Loading indicator - MUST ALWAYS EXIST */}
      <div className="loading" style={{ display: loading ? 'block' : 'none', position: 'absolute', top: '10px', left: '10px' }}>
        {loading ? "Loading..." : ""}
      </div>
      
      {/* Textarea for markdown input */}
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter markdown here..."
        style={{ 
          width: '50%', 
          padding: '20px', 
          fontSize: '16px',
          border: '1px solid #ccc',
          resize: 'none'
        }}
      />
      
      {/* Preview area */}
      <div
        className="preview"
        style={{ 
          width: '50%', 
          padding: '20px',
          borderLeft: '1px solid #ccc',
          overflowY: 'auto'
        }}
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </div>
  );
};

export default MarkdownEditor;
