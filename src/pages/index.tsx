import Navbar from "../components/Navbar";
import TopLevelContainer from "../components/TopLevelContainer";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useGrid from "../components/styles/PageGrid";

const IndexPage = () => {
	const classes = useGrid();
	return (
		<>
			<TopLevelContainer title="Index">
				<Grid item xs={10} className={classes.nav}>
					<Navbar title="Home | MetaJeDD"></Navbar>
				</Grid>
				<Grid item xs={10} className={classes.root}>
					<Paper className={classes.paper}>
						<h1>👋 Hello 👋</h1>
						<p>
							This is a tech blog where I want to share my experience as a
							software engineer.
						</p>
						<p>No more BS.</p>
					</Paper>
				</Grid>
			</TopLevelContainer>
		</>
	);
};

export default IndexPage;
