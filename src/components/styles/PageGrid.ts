import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useGrid = makeStyles((theme: Theme) =>
	createStyles({
		nav: {
			marginTop: "2rem",
			marginBottom: "2rem",
			backgroundColor: "white",
		},
		root: {
			marginLeft: "1rem",
			marginRight: "1rem",
		},
		paper: {
			padding: theme.spacing(2),
			color: theme.palette.text.primary,
		},
	})
);

export default useGrid;
