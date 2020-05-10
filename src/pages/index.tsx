import Navbar from "../components/Navbar";
import TopLevelContainer from "../components/TopLevelContainer";

const IndexPage = () => {
	return (
		<>
			<Navbar title="Home | MetaJeDD"></Navbar>
			<TopLevelContainer title="Index">
				<div>
					<h1>👋 Hello 👋</h1>
					<p>
						This is a tech blog where I want to share my experience as a
						software engineer.
					</p>
					<p>No more BS.</p>
				</div>
			</TopLevelContainer>
		</>
	);
};

export default IndexPage;
