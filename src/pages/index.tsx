import Navbar from "../components/Navbar";
import TopLevelContainer from "../components/TopLevelContainer";
import Grid from "@material-ui/core/Grid";
import useGrid from "../components/styles/PageGrid";
import FixedDiv from "../components/styles/FixDiv";

const IndexPage = () => {
	const classes = useGrid();
	return (
		<>
			<TopLevelContainer title="Index">
				<Grid item xs={12} className={classes.nav}>
					<FixedDiv>
						<Navbar title="Aritile" />
					</FixedDiv>
				</Grid>
				<Grid item xs={8} className={classes.root}>
					<h1>👋 Hello 👋</h1>
					<p>
						This is a tech blog where I want to share my experience as a
						software engineer.
					</p>
					<p>No more BS.</p>
				</Grid>
			</TopLevelContainer>
		</>
	);
};

export default IndexPage;
