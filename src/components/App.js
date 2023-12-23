<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React,{useState,useEffect} from "react"

const App=()=> {

    const [markdownText, setMarkdownText] = useState('');
    

    const [html, setHtml] = useState('');
    
    useEffect(() => {
      setHtml(markdownText);
    }, [markdownText]);
  
    return (
      <div className="app">
        <textarea
          className="textarea"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
          placeholder="Write your markdown here..."
        />
        <div>
           <h1 className="preview" dangerouslySetInnerHTML={{ __html: html }} ></h1>
        </div>
  
        {html === '' && <div className="loading">Loading...</div>}
      </div>
    );
  }
  
export default App