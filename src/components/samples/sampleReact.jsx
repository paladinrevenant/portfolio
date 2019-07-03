import React from "react";

const sampleReact = () => (
  <code className="styled">
    <span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">{"\"react\""}</span>{";"}<br/>
    <br/>
    <span className="keyword">const</span> <span className="function">welcome</span> <span className="operator">{"="}</span> <span className="bracket">{"("}</span><span className="property">props</span><span className="bracket">{")"}</span> <span className="operator">{"=>"}</span> <span className="bracket">{"{"}</span><br/>
    <span className="tab"></span><span className="keyword">const</span> message <span className="operator">{"="}</span> <span className="string">{"\"Hello, World!\""}</span>{";"}<br/>
    <br/>
    <span className="tab"></span><span className="keyword">return</span> <span className="bracket">{"("}</span><br/>
    <span className="tab"></span><span className="tab"></span>&lt;<span className="keyword">h1</span>&gt;<span className="bracket">{"{"}</span>message<span className="bracket">{"}"}</span>&lt;/<span className="keyword">h1</span>&gt;<br/>
    <span className="tab"></span><span className="bracket">{")"}</span>{";"}<br/>
    <span className="bracket">{"}"}</span>;<br/>
    <br/>
    <span className="keyword">export default</span> welcome;<br/>
  </code>
);

export default sampleReact;