import React from "react";

const sampleSlim = () => (
  <code className="styled">
    $app <span className="operator">{"="}</span> <span className="keyword">new \</span><span className="type">Slim</span><span className="keyword">\</span><span className="type">App</span>{";"}<br/>
    <br/>
    $app<span className="operator">{"->"}</span><span className="function">get</span><span className="bracket">{"("}</span><span className="string">{"\"/greeting\""}</span>, <span className="keyword">function</span> <span className="bracket">{"("}</span><span className="type">Request</span> $request, <span className="type">Response</span> $response, <span className="type">array</span> $args<span className="bracket">{") {"}</span><br/>
    &nbsp;&nbsp;$response<span className="operator">{"->"}</span><span className="function">getBody</span><span className="bracket">{"()"}</span><span className="operator">{"->"}</span><span className="function">write</span><span className="bracket">{"("}</span><span className="string">{"\"Hello, World!\""}</span><span className="bracket">{")"}</span>{";"}<br/>
    <br/>
    &nbsp;&nbsp;<span className="keyword">return</span>{" $response;"}<br/>
    <span className="bracket">{"})"}</span>{";"}<br/>
    <br/>
    $app<span className="operator">{"->"}</span><span className="function">run</span><span className="bracket">{"()"}</span>{";"}<br/>
  </code>
);

export default sampleSlim;