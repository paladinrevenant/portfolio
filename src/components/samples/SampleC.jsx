import React from "react";

const sampleC = () => (
  <pre>
    <code className="styled">
      <span className="keyword">#include</span> <span className="string">&lt;stdio.h&gt;</span><br/>
      <br/>
      <span className="keyword">int</span> <span className="function">main</span><span className="bracket">{"("}</span><span className="keyword">void</span><span className="bracket">{")"}</span> <span className="bracket">{"{"}</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">char</span><span className="bracket">{"[]"}</span> message <span className="operator">{"="}</span> <span className="string">{"\"Hello, World!\""}</span>{";"}<br/>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">printf</span><span className="bracket">{"("}</span>message<span className="bracket">{")"}</span>{";"}<br/>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span><span className="bracket">{"("}</span><span className="number">0</span><span className="bracket">{")"}</span>{";"}<br/>
      <span className="bracket">{"}"}</span><br/>
    </code>
  </pre>
);

export default sampleC;