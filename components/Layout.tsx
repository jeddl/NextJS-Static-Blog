import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
	title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
	children,
	title = "MetaJeDD",
}) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<header>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>{" "}
				|{" "}
				<Link href="/articles/test1">
					<a>Articles</a>
				</Link>{" "}
				|{" "}
				<Link href="/about">
					<a>About</a>
				</Link>{" "}
			</nav>
		</header>
		{children}
		<footer>
			<hr />
			<span>Footer Placeholder</span>
		</footer>
	</div>
);

export default Layout;
