import React from "react";
import Link from "next/link";
import Head from "next/head";
import Props from "../interfaces/props";
import styles from "./styles/NavLink";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const Navbar: React.FunctionComponent<Props> = ({ title = "MetaJeDD" }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header>
				<Breadcrumbs aria-label="breadcrumb">
					<Link href="/">
						<a style={styles.root}>Home</a>
					</Link>
					<Link href="/posts">
						<a style={styles.root}>Articles</a>
					</Link>
					<Link href="/contact">
						<a style={styles.root}>Contact</a>
					</Link>
				</Breadcrumbs>
			</header>
		</div>
	);
};

export default Navbar;
