import Navbar from "../components/Navbar";
import { GetStaticProps } from "next";
import Link from "next/link";
import TopLevelContainer from "../components/TopLevelContainer";
import getFilenames, { getFileContentWithMeta } from "../usecases/getFileInfo";
import Grid from "@material-ui/core/Grid";
import useGrid from "../components/styles/PageGrid";
import FixedDiv from "../components/styles/FixDiv";
import {
	ListRoot,
	ListItem,
	StyledLink,
	DivWrapper,
	TitleDiv,
} from "../components/styles/ArticleList";

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
					<TitleDiv>
						<h1> Articles </h1>
					</TitleDiv>
					<ListRoot>
						{titleWithFilenames.map((titleWithFilename) => {
							return (
								<ListItem key={titleWithFilename["filename"]}>
									<DivWrapper>
										<Link
											href="/articles/[slug]"
											as={"/articles/" + titleWithFilename["filename"]}
											passHref
										>
											<StyledLink>{titleWithFilename["title"]}</StyledLink>
										</Link>
									</DivWrapper>
								</ListItem>
							);
						})}
					</ListRoot>
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
