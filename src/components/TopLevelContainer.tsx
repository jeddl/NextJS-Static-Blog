import React from "react";
import Props from "../interfaces/props";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const TopLevelContainer: React.FunctionComponent<Props> = ({
	title,
	children,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Container maxWidth="md">
				<Grid container spacing={3}>
					{children}
				</Grid>
			</Container>
		</>
	);
};

export default TopLevelContainer;
