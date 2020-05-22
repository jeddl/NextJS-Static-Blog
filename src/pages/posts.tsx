import Navbar from "../components/Navbar";
import { GetStaticProps } from "next";
import Link from "next/link";
import TopLevelContainer from "../components/TopLevelContainer";
import getFilenames, { getFileContentWithMeta } from "../usecases/getFileInfo";
import Grid from "@material-ui/core/Grid";
import useGrid from "../components/styles/PageGrid";
import FixedDiv from "../components/styles/FixDiv";

const Articles = ({ titleWithFilenames }) => {
	const classes = useGrid();
	return (
		<>
			<TopLevelContainer title="Articles">
				<Grid item xs={12} className={classes.nav}>
					<FixedDiv>
						<Navbar title="Aritile" />
					</FixedDiv>
				</Grid>
				<Grid item xs={6} className={classes.root}>
					<h1> Articles </h1>
					<div>
						{titleWithFilenames.map((titleWithFilename) => {
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
				</Grid>
			</TopLevelContainer>
		</>
	);
};

export default Articles;

export const getStaticProps: GetStaticProps = async () => {
	const files = getFilenames();

	const metadatas = getFileContentWithMeta(files).map(
		(allData) => allData.data
	);
	const titles = metadatas.map((metadata) => metadata.title);
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
