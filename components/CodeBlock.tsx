import React from "react";
import Code from "../interfaces/code";
import SyntaxHighlighter from "react-syntax-highlighter";
import {ocean} from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock: React.FunctionComponent<Code> = ({value, language}) => {
	return (
		<SyntaxHighlighter language={language} stype={ocean}>
			{value}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
