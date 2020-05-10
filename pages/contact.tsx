import React from "react";
import Navbar from "../components/Navbar";
import TopLevelContainer from "../components/TopLevelContainer";

const ContactPage: React.FunctionComponent = () => (
	<div>
		<TopLevelContainer title="Contact">
			<div>
				<Navbar title="Contact" />
				<h1>Contact me</h1>
			</div>
		</TopLevelContainer>
	</div>
);

export default ContactPage;
