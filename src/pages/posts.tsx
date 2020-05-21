import Navbar from "../components/Navbar";
import { GetStaticProps } from "next";
import Link from "next/link";
import TopLevelContainer from "../components/TopLevelContainer";
import getFilenames, { getFileContentWithMeta } from "../usecases/getFileInfo";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useGrid from "../components/styles/PageGrid";

const Articles = ({ titleWithFilenames }) => {
	const classes = useGrid();
	return (
		<>
			<TopLevelContainer title="Articles">
				<Grid item xs={10} className={classes.nav}>
					<Paper className={classes.paper}>
						<Navbar title="Articles"></Navbar>
					</Paper>
				</Grid>
				<Grid item xs={10} className={classes.root}>
					<Paper className={classes.paper}>
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
					</Paper>
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
