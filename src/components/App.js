<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React,{useState,useEffect} from "react"

function App() {
    // State to manage the markdown text
    const [markdownText, setMarkdownText] = useState('');
    
    // State to manage the HTML representation of the markdown
    const [html, setHtml] = useState('');
    
    // Effect to update the HTML representation whenever markdownText changes
    useEffect(() => {
      // Use the marked library to convert markdown to HTML
      setHtml(marked(markdownText));
    }, [markdownText]);
  
    return (
      <div className="app">
        {/* Textarea for writing markdown */}
        <textarea
          className="textarea"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
          placeholder="Write your markdown here..."
        />
        
        {/* Preview section for rendering HTML */}
        <div className="preview" dangerouslySetInnerHTML={{ __html: html }} />
  
        {/* Loading text (optional) */}
        {html === '' && <div className="loading">Loading...</div>}
      </div>
    );
  }
  
export default App