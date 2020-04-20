import Nav from "react-bootstrap/Nav";

function Navigationbar() {
	return (
		<div>
			<Nav
				className="justify-content-center"
				variant="pills"
				defaultActiveKey="/home"
			>
				<Nav.Item>
					<Nav.Link href="/home">Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="articles" href="/articles">
						Articles
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/Contact">Contact</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}

export default Navigationbar;
