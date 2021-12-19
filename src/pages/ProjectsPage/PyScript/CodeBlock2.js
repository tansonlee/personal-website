import React from "react";
import "./PyScript.css";

const CodeBlock2 = () => {
	return (
		<pre className="code-block">
			<code>
				<span className="code-keyword">BRCH</span> _START_BODY
			</code>
			<br />
			<code>
				<span className="code-keyword">DATA</span> n 10
			</code>
			<br />
			<code>
				<span className="code-keyword">LABEL</span> _FUNCTION_main
			</code>
			<br />
			<code>
				<span className="code-keyword">MOV</span> (0 _STACK_POINTER) _RETURN_ADDRESS
			</code>
			<br />
			<code>
				<span className="code-keyword">ADD</span> _STACK_POINTER _STACK_POINTER 1
			</code>
			<br />
			<code>
				<span className="code-keyword">LABEL</span> _LABEL_4
			</code>
			<br />
			<code>...</code>
			<br />
			<code>
				<span className="code-keyword">LABEL</span> _START_BODY
			</code>
			<br />
			<code>
				<span className="code-keyword">BLNK</span> _RETURN_ADDRESS _FUNCTION_main
			</code>
			<br />
			<code>
				<span className="code-keyword">BRCH</span> _HALT_LABEL
			</code>
			<br />
			<code>
				<span className="code-keyword">LABEL</span> _HALT_LABEL
			</code>
			<br />
			<code>
				<span className="code-keyword">HALT</span>
			</code>
			<br />
			<code>
				<span className="code-keyword">DATA</span> _RESULT 0
			</code>
			<br />
			<code>
				<span className="code-keyword">DATA</span> _RETURN_ADDRESS 0
			</code>
			<br />
			<code>
				<span className="code-keyword">DATA</span> _STACK_POINTER _STACK
			</code>
			<br />
			<code>
				<span className="code-keyword">LABEL</span> _STACK
			</code>
		</pre>
	);
};

export default CodeBlock2;
