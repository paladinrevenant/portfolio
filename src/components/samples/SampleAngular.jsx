import React from "react";

const sampleAngular = () => (
  <pre>
    <code className="styled">
      <span className="keyword">import</span> <span className="bracket">{"{"}</span> Component <span className="bracket">{"}"}</span> from <span className="string">{"\"@angular/core\""}</span>{";"}<br/>
      <br/>
      {"@"}<span className="function">Component</span> <span className="bracket">{"({"}</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;selector<span className="operator">{":"}</span> <span className="string">{"\"my-app\""}</span>,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;template<span className="operator">{":"}</span> <span className="string">{"` <div>"}</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">{"<h1>{{welcome}}</h1>"}</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">{"</div> `"}</span><br/>
      <span className="bracket">{"})"}</span><br/>
      <br/>
      <span className="keyword">export class</span> <span className="class">WelcomeComponent</span> <span className="bracket">{"{"}</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;welcome<span className="operator">:</span> <span className="type">string</span> <span className="operator">{"="}</span> <span className="string">{"\"Hello, World!\""}</span>;<br/>
      <span className="bracket">{"}"}</span><br/>
    </code>
  </pre>
);

export default sampleAngular;