import React from "react";

const sampleCpp = () => (
  <code className="styled">
    <span className="keyword">#include</span> <span className="string">&lt;iostream&gt;</span><br/>
    <span className="keyword">#include</span> <span className="string">&lt;string&gt;</span><br/>
    <span className="keyword">using namespace</span> <span className="namespace">std</span>;<br/>
    <br/>
    <span className="keyword">int</span> <span className="function">main</span><span className="bracket">{"("}</span><span className="keyword">void</span><span className="bracket">{")"}</span> <span className="bracket">{"{"}</span><br/>
      <span className="tab"></span><span className="type">string</span> message <span className="operator">{"="}</span> <span className="string">{"\"Hello, World!\""}</span>{";"}<br/>
      <br/>
      <span className="tab"></span>cout <span className="operator">&lt;&lt;</span> message <span className="operator">&lt;&lt;</span> endl;<br/>
      <br/>
      <span className="tab"></span><span className="keyword">return</span> <span className="number">0</span>;<br/>
    <span className="bracket">{"}"}</span><br/>
  </code>
);

export default sampleCpp;