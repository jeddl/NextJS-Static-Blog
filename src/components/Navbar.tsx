import React from "react";
import Link from "next/link";
import Head from "next/head";
import Props from "../interfaces/props";
import StyledLink from "./styles/NavLink";
import FixedDiv from "./styles/FixDiv";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Box from "@material-ui/core/Box";

const Navbar: React.FunctionComponent<Props> = ({ title = "MetaJeDD" }) => {
	return (
		<FixedDiv>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header>
				<Box
					marginTop="2rem"
					marginLeft="45rem"
					marginBottom="2rem"
					marginRight="5rem"
				>
					<Breadcrumbs aria-label="breadcrumb">
						<Link href="/" passHref>
							<StyledLink>Home</StyledLink>
						</Link>
						<Link href="/posts" passHref>
							<StyledLink>Articles</StyledLink>
						</Link>
						{/* <Link href="/contact" passHref>
								<StyledLink>Contact</StyledLink>
							</Link> */}
					</Breadcrumbs>
				</Box>
			</header>
		</FixedDiv>
	);
};

export default Navbar;
