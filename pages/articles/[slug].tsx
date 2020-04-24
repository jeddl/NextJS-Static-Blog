import fs from "fs";
import {GetStaticPaths, GetStaticProps} from "next";
import React from "react";
import Article from "../../interfaces/article";

const Post: React.FunctionComponent<Article> = ({slug}) => {
	return <div>The slug for this page is {slug}</div>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync("pages/articles/contents");
	const paths = files.map(filename => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));
	console.log(paths);
	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({params}) => {
	const slug = params?.slug;
	return {
		props: {
			slug,
		},
	};
};
