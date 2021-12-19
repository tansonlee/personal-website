import React from "react";
import "./PyScript.css";
import CodeBlock1 from "./CodeBlock1";
import CodeBlock2 from "./CodeBlock2";
import CodeBlock3 from "./CodeBlock3";
import CodeBlock4 from "./CodeBlock4";

const PyScript = () => {
	return (
		<div className="introduction-project-wrapper py-script-wrapper">
			<div className="py-script-code-blocks">
				<div>
					<h4 className="code-block-header">PyScript</h4>
					<CodeBlock1 />
				</div>
				<div className="code-block-assembled">
					<h4 className="code-block-header">Assembled</h4>
					<CodeBlock2 />
				</div>
				<div className="code-block-compiled">
					<h4 className="code-block-header">Compiled</h4>
					<CodeBlock3 />
				</div>
				<div className="code-block-output">
					<h4 className="code-block-header">Output</h4>
					<CodeBlock4 />
				</div>
			</div>

			<div className="py-script-description-wrapper">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<h3 className="project-name" style={{ justifyContent: "flex-start" }}>
						PyScript
					</h3>
					<div className="track-me-link-wrapper">
						<a
							rel="noreferrer"
							target="_blank"
							className="link-to-project track-me-link"
							href="https://github.com/tansonlee/PyScript"
						>
							Code Link
						</a>
						<a
							rel="noreferrer"
							target="_blank"
							className="link-to-project track-me-link"
							href="https://replit.com/@TansonL/PyScript#test.ps"
						>
							Sandbox Link
						</a>
					</div>
					<p className="learning-outcomes" style={{ textAlign: "unset" }}>
						Python | Interpreters | Compilers | Language Design
					</p>
				</div>
				<p className="project-description project-description-long">
					PyScript is a Turing Complete scripting language implemented in Python. I
					created both an interpreter and compiler to run the language. The syntax is
					simple and has the core features of any programming language: variables,
					functions, loops, conditionals, I/O, and comments. PyScript compiles into custom
					machine code which runs on a computer simulation I created.
				</p>
				<p className="project-description project-description-short">
					PyScript is a Turing Complete scripting language implemented in Python
					accompanied by both an interpreter and compiler. The language has all core
					features such as: variables, functions, loops, conditionals, I/O, and comments.
				</p>
			</div>
		</div>
	);
};

export default PyScript;
