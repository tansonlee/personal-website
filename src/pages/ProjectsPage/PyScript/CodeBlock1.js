import React from "react";
import "./PyScript.css";

const CodeBlock1 = () => {
	return (
		<pre className="code-block">
			<code className="code-sections">@declarations</code>
			<br />
			<code className="code-code">
				<span className="code-keyword">declare</span>
				<span className="code-variable">{` n`}</span>
				{` 10`}
			</code>
			<br />
			<code className="code-sections">@declarations</code>
			<br />

			<br />
			<code className="code-sections">@functions</code>
			<br />
			<code>
				<span className="code-keyword">function</span>
				<span className="code-variable">{` main`}</span>
				{` {`}
			</code>
			<br />
			<code>
				<span className="code-keyword">{`    while`}</span>
				{` |`}
				<span className="code-variable">n</span>
				{` > 0| {`}
			</code>
			<br />
			<code>
				<span className="code-keyword">{`        show`}</span>
				<span className="code-variable">{` n`}</span>
			</code>
			<br />
			<code>
				<span className="code-keyword">{`        change`}</span>
				<span className="code-variable">{` n`}</span>
				{` !`}
				<span className="code-variable">n</span>
				{` - 1!`}
			</code>
			<br />
			<code>{`    }`}</code>
			<br />
			<code>{`}`}</code>
			<br />
			<code className="code-sections">{`@functions`}</code>
			<br />
			<br />
			<code className="code-sections">{`@body`}</code>
			<br />
			<code>
				<span className="code-keyword">run</span>
				<span className="code-variable">{` main`}</span>
			</code>
			<br />
			<code className="code-sections">{`@body`}</code>
		</pre>
	);
};

export default CodeBlock1;
