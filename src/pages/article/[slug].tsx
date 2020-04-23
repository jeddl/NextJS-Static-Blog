import fs from "fs";
import {GetStaticPaths, GetStaticProps} from "next";
import React from "react";

const Post = ({slug}) => {
	return <div>The slug for this page is {slug}</div>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync("src/contents/articles");
	console.log(files);
	return {
		paths: files.map(filename => ({
			params: {
				slug: filename.replace(".md", ""),
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({params: {slug}}) => {
	return {
		props: {
			slug,
		},
	};
};
