import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useGrid = makeStyles((theme: Theme) =>
	createStyles({
		nav: {
			marginTop: "2rem",
			marginLeft: "6rem",
			// textAlign: "right",
		},
		root: {
			marginLeft: "6rem",
		},
		paper: {
			// marginLeft: "0rem",
			padding: theme.spacing(2),
			// textAlign: "center",
			// color: theme.palette.text.secondary,
		},
	})
);

export default useGrid;
