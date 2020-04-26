import React from "react";
import Navbar from "../components/Navbar";
import TopLevelContainer from "../components/TopLevelContainer";

const ContactPage: React.FunctionComponent = () => (
	<div>
		<Navbar title="Contact" />
		<TopLevelContainer title="Contact">
			<h1>Contact me</h1>
		</TopLevelContainer>
	</div>
);

export default ContactPage;
