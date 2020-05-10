import Navbar from "../components/Navbar";
import TopLevelContainer from "../components/TopLevelContainer";

const IndexPage = () => {
	return (
		<>
			<TopLevelContainer title="Index">
				<Navbar title="Home | MetaJeDD"></Navbar>
				<h1>👋 Hello 👋</h1>
				<p>
					This is a tech blog where I want to share my experience as a software
					engineer.
				</p>
				<p>No more BS.</p>
			</TopLevelContainer>
		</>
	);
};

export default IndexPage;
