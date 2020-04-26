import Navbar from "../components/Navbar";
import {GetStaticProps} from "next";
import fs from "fs";
import path from "path";
import Files from "../interfaces/files";
import Link from "next/link";
import TopLevelContainer from "../components/TopLevelContainer";

const Articles: React.FunctionComponent<Files> = ({filenames}) => (
	<>
		<Navbar title="Articles"></Navbar>
		<TopLevelContainer title="Articles">
			<h1> Articles </h1>
			<div>
				{filenames.map(filename => {
					return (
						<li key="filename">
							<Link href="/articles/[slug]" as={"/articles/" + filename}>
								<a>{filename}</a>
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
	const files = fs.readdirSync(path.join("pages", "articles", "contents"));
	return {
		props: {
			filenames: files.map(filename => filename.replace(".md", "")),
		},
	};
};
