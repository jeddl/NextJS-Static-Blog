import React from "react";
import Props from "../interfaces/props";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

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
			<CssBaseline />
			<Container maxWidth="md">{children}</Container>
		</>
	);
};

export default TopLevelContainer;
