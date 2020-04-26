import React from "react";
import Code from "../interfaces/code";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";

const CodeBlock: React.FunctionComponent<Code> = ({value, language}) => {
	return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default CodeBlock;
