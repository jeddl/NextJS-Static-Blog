import Navbar from "../components/Navbar";
import {GetStaticProps} from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import TopLevelContainer from "../components/TopLevelContainer";
import matter from "gray-matter";

const Articles = ({titleWithFilenames}) => (
	<>
		<Navbar title="Articles"></Navbar>
		<TopLevelContainer title="Articles">
			<h1> Articles </h1>
			<div>
				{titleWithFilenames.map(titleWithFilename => {
					return (
						<li key={titleWithFilename["filename"]}>
							<Link
								href="/articles/[slug]"
								as={"/articles/" + titleWithFilename["filename"]}
							>
								<a>{titleWithFilename["title"]}</a>
							</Link>
						</li>
					);
				})}
			</div>
		</TopLevelContainer>
	</>
);

export default Articles;

export const getStaticProps: GetStaticProps = async () => {
	const dirPath = path.join("pages", "articles", "contents");
	const files = fs.readdirSync(dirPath);

	const metadatas = files
		.map(filename => fs.readFileSync(path.join(dirPath, filename)).toString())
		.map(data => matter(data).data);
	const titles = metadatas.map(metadata => metadata.title);
	let titleWithFilenames: {}[] = [];
	for (let i = 0; i < titles.length; i++) {
		titleWithFilenames.push({
			title: titles[i],
			filename: files[i].replace(".md", ""),
		});
	}
	return {
		props: {
			titleWithFilenames: titleWithFilenames,
		},
	};
};
