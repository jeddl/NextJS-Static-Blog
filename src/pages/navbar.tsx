import React from "react";
import Link from "next/Link";

function Navigationbar() {
	return (
		<div>
			<li>
				<Link href="/index">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href="/article/[slug]" as="/article/test">
					<a>Go to articles</a>
				</Link>
			</li>
			<li>
				<Link href="/contact" as="/contact">
					<a>Contact</a>
				</Link>
			</li>
		</div>
	);
}

export default Navigationbar;
