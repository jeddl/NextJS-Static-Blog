import Navbar from "../components/Navbar";
import TopLevelContainer from "../components/TopLevelContainer";

const IndexPage = () => {
	return (
		<>
			<Navbar title="Home | MetaJeDD"></Navbar>
			<TopLevelContainer title="Home">
				<h1>👋 Hello 👋</h1>
			</TopLevelContainer>
		</>
	);
};

export default IndexPage;
