import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [preview, setPreview] = useState("<h1>Hello world</h1>");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      let html = markdown;
      
      // Handle headings (order matters!)
      html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
      html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
      html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
      
      // Handle bold
      html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      
      // Handle italic
      html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
      
      // Handle paragraphs
      const lines = html.split('\n');
      html = lines.map(line => {
        if (line.trim() && !line.startsWith('<h')) {
          return `<p>${line}</p>`;
        }
        return line;
      }).join('');
      
      setPreview(html);
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [markdown]);

  return (
    <div style={{ display: 'flex', height: '100vh', margin: 0 }}>
      <div className="loading">
        {loading ? "Loading..." : ""}
      </div>
      
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter markdown here..."
        style={{ 
          width: '50%', 
          padding: '20px', 
          fontSize: '16px',
          border: '1px solid #ddd',
          resize: 'none',
          fontFamily: 'monospace'
        }}
      />
      
      <div
        className="preview"
        style={{ 
          width: '50%', 
          padding: '20px',
          borderLeft: '1px solid #ddd',
          overflowY: 'auto',
          backgroundColor: '#fff'
        }}
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </div>
  );
};

export default MarkdownEditor;
