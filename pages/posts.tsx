import Layout from "../components/Layout";
import {GetStaticProps} from "next";
import fs from "fs";
import path from "path";
import Files from "../interfaces/files";
import Link from "next/link";

const Articles: React.FunctionComponent<Files> = ({filenames}) => (
	<Layout title="Articles">
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
	</Layout>
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
