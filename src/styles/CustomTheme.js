import { createTheme, makeStyles } from "@material-ui/core";

export const customTheme = createTheme({});

export const customStyle = makeStyles((theme) => ({
	root: {
		height: "100vh",
		width: "100vw",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	taskList: {
		marginTop: 40,
		width: 400,
		height: 600,
	},
}));
