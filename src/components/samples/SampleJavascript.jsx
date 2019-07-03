import React from "react";

const sampleJavascript = () => (
  <code className="styled">
    <span className="keyword">const</span> body <span className="operator">{"="}</span> document.body;<br/>
    <span className="keyword">const</span> heading <span className="operator">{"="}</span> document.<span className="function">createElement</span><span className="bracket">{"("}</span><span className="string">{"\"h1\""}</span><span className="bracket">{")"}</span>{";"}<br/>
    <span className="keyword">const</span> headingText <span className="operator">{"="}</span> document.<span className="function">createTextNode</span><span className="bracket">{"("}</span><span className="string">{"\"Hello, World!\""}</span><span className="bracket">{")"}</span>{";"}<br/>
    <span className="keyword">const</span> firstNode <span className="operator">=</span> body.firstChild;<br/>
    <br/>
    heading.<span className="function">appendChild</span><span className="bracket">{"("}</span>headingText<span className="bracket">{")"}</span>{";"}<br/>
    body.<span className="function">insertBefore</span><span className="bracket">{"("}</span>heading, firstNode<span className="bracket">{")"}</span>{";"}<br/>
  </code>
);

export default sampleJavascript;