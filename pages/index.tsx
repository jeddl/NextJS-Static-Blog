import Navbar from "../components/Navbar";
import TopLevelContainer from "../components/TopLevelContainer";
import {GetStaticProps} from "next";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

const IndexPage = ({metadata}) => {
	console.log(metadata);
	return (
		<>
			<Navbar title="Home | MetaJeDD"></Navbar>
			<TopLevelContainer title="Home">
				<h1>👋 Hello 👋</h1>
			</TopLevelContainer>
		</>
	);
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
	const dirPath = path.join("pages", "articles", "contents");
	const metadatas = fs
		.readdirSync(dirPath)
		.map(filename => fs.readFileSync(path.join(dirPath, filename)).toString())
		.map(data => matter(data).data);
	return {
		props: {
			metadata: metadatas,
		},
	};
};
