import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import Props from "../interfaces/props";
import LinkButtons from "../pages/styles/LinkButton";
import myStyles from "../pages/styles/MyStyle";

const Navbar: React.FunctionComponent<Props> = ({ title = "MetaJeDD" }) => (
	<div style={myStyles}>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<header>
			<nav>
				<Link href="/" passHref>
					<LinkButtons>Home</LinkButtons>
				</Link>
				<Link href="/posts" passHref>
					<LinkButtons>Articles</LinkButtons>
				</Link>
				<Link href="/contact" passHref>
					<LinkButtons>Contact</LinkButtons>
				</Link>
			</nav>
		</header>
	</div>
);

export default Navbar;
