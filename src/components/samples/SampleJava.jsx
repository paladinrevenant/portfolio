import React from "react";

const sampleJava = () => (
  <pre>
    <code className="styled">
      <span className="keyword">public class</span> <span className="class">Welcome</span> <span className="bracket">{"{"}</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">public static</span> <span className="return">void</span> <span className="function">main</span><span className="bracket">{"("}</span><span className="type">String</span><span className="bracket">{"[]"}</span> <span className="property">args</span><span className="bracket">{") {"}</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">String</span> message <span className="operator">{"="}</span> <span className="string">{"\"Hello, World!\""}</span>{";"}<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.<span className="function">println</span><span className="bracket">{"("}</span>message<span className="bracket">{")"}</span>{";"}<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">{"}"}</span><br/>
      <span className="bracket">{"}"}</span>
    </code>
  </pre>
);

export default sampleJava;