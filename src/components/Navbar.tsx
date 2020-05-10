import React from "react";
import Link from "next/link";
import Head from "next/head";
import Props from "../interfaces/props";
// import StyledBreadcrumb from "../pages/styles/NavbarStyle";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import HomeIcon from "@material-ui/icons/Home";

// const CustomizedBreadcrumbs = React.forwardRef<
// 	HTMLButtonElement,
// 	React.HTMLProps<HTMLButtonElement>
// >(({ href, onClick, children }, ref) => {
// 	return (
// 		<StyledBreadcrumb
// 			component="a"
// 			href={href}
// 			label={children}
// 			// icon={<HomeIcon fontSize="small" />}
// 			onClick={() => onClick}
// 			ref={() => ref}
// 		/>
// 	);
// });

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
						<a style={{ textDecoration: "none" }}>Home</a>
					</Link>
					<Link href="/posts">
						<a style={{ textDecoration: "none" }}>Articles</a>
					</Link>
					<Link href="/contact">
						<a style={{ textDecoration: "none" }}>Contact</a>
					</Link>
				</Breadcrumbs>
			</header>
		</div>
	);
};

export default Navbar;
