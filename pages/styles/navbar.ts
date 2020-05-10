import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		link: {
			display: "flex",
		},
		icon: {
			marginRight: theme.spacing(0.5),
			width: 20,
			height: 20,
		},
	})
);

export default useStyles;
