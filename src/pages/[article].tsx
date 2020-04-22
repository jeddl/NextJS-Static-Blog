import React from "react";
import fs from "fs";

const Post = ({article}) => {
	return <div>The article for this page is {article}</div>;
};

export async function getStaticPaths() {
	const files = fs.readdirSync("../contents/articles");
	console.log(files);
	return {
		path: files.map(filename => ({
			params: {
				article: filename.replace(".md", ""),
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({params: {article}}) {
	return {
		props: {
			article,
		},
	};
}

export default Post;
