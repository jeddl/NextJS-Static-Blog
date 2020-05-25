import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Article from "../../interfaces/article";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock";
import Navbar from "../../components/Navbar";
import TopLevelContainer from "../../components/TopLevelContainer";
import getFilenames, {
	getFileContentWithMeta,
} from "../../usecases/getFileInfo";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useGrid from "../../components/styles/PageGrid";
import FixedDiv from "../../components/styles/FixDiv";

const Post: React.FunctionComponent<Article> = ({ contents, metadata }) => {
	const classes = useGrid();
	return (
		<>
			<div>
				<Head>
					<title>{metadata.title}</title>
				</Head>
				<TopLevelContainer title={metadata.title}>
					<Grid item xs={12} className={classes.nav}>
						<FixedDiv>
							<Navbar title="Aritile" />
						</FixedDiv>
					</Grid>
					<Grid item xs={12} className={classes.root}>
						<Paper className={classes.paper}>
							<ReactMarkdown
								source={contents}
								renderers={{ code: CodeBlock }}
								transformImageUri={(uri) => {
									console.log(uri);
									return uri.startsWith("http")
										? uri
										: `http://localhost:3000${uri}`;
								}}
							/>
						</Paper>
					</Grid>
				</TopLevelContainer>
			</div>
		</>
	);
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
	const filenames = getFilenames();
	return {
		paths: filenames.map((filename) => ({
			params: {
				slug: filename,
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	if (!ctx.params) {
		return { props: {} };
	}
	const { slug } = ctx.params;
	const parsed = getFileContentWithMeta(slug)[0];
	return {
		props: {
			contents: parsed.content,
			metadata: parsed.data,
		},
	};
};
