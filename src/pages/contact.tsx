import React from "react";
import Navbar from "../components/Navbar";
import TopLevelContainer from "../components/TopLevelContainer";

const ContactPage: React.FunctionComponent = () => (
	<div>
		<Navbar title="Contact" />
		<TopLevelContainer title="Contact">
			<div>
				<h1>Contact me</h1>
			</div>
		</TopLevelContainer>
	</div>
);

export default ContactPage;
