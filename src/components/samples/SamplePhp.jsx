import React from "react";

const samplePhp = () => (
  <code className="styled">
    <span className="keyword">&lt;?php</span><br/>
    <span className="tab"></span>$message <span className="operator">{"="}</span> <span className="string">{"\"Hello, World!\""}</span><br/>
    <span className="keyword">?&gt;</span><br/>
    &lt;<span className="keyword">html</span>&gt;<br/>
    <span className="tab"></span>&lt;<span className="keyword">head</span>&gt;<br/>
    <span className="tab"></span><span className="tab"></span>&lt;<span className="keyword">title</span>&gt;<span className="keyword">&lt;?php</span> <span className="command">echo</span> $message; <span className="keyword">?&gt;</span>&lt;/<span className="keyword">title</span>&gt;<br/>
    <span className="tab"></span>&lt;/<span className="keyword">head</span>&gt;<br/>
    <span className="tab"></span>&lt;<span className="keyword">body</span>&gt;<br/>
    <span className="tab"></span><span className="tab"></span>&lt;<span className="keyword">h1</span>&gt;<span className="keyword">&lt;?php</span> <span className="command">echo</span> $message; <span className="keyword">?&gt;</span>&lt;/<span className="keyword">h1</span>&gt;<br/>
    <span className="tab"></span>&lt;/<span className="keyword">body</span>&gt;<br/>
    &lt;/<span className="keyword">html</span>&gt;<br/>
  </code>
);

export default samplePhp;