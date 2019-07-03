import React from "react";

const sampleAngular = () => (
  <code className="styled">
    <span className="keyword">import</span> <span className="bracket">{"{"}</span> Component <span className="bracket">{"}"}</span> from <span className="string">{"\"@angular/core\""}</span>{";"}<br/>
    <br/>
    {"@"}<span className="function">Component</span> <span className="bracket">{"({"}</span><br/>
    <span className="tab"></span>selector<span className="operator">{":"}</span> <span className="string">{"\"my-app\""}</span>,<br/>
    <span className="tab"></span>template<span className="operator">{":"}</span> <span className="string">{"` <div>"}</span><br/>
    <span className="tab"></span><span className="tab"></span><span className="string">{"<h1>{{welcome}}</h1>"}</span><br/>
    <span className="tab"></span><span className="string">{"</div> `"}</span><br/>
    <span className="bracket">{"})"}</span><br/>
    <br/>
    <span className="keyword">export class</span> <span className="class">WelcomeComponent</span> <span className="bracket">{"{"}</span><br/>
    <span className="tab"></span>welcome<span className="operator">:</span> <span className="type">string</span> <span className="operator">{"="}</span> <span className="string">{"\"Hello, World!\""}</span>;<br/>
    <span className="bracket">{"}"}</span><br/>
  </code>
);

export default sampleAngular;