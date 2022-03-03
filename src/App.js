import React from "react";
import { Box, ThemeProvider, Typography } from "@material-ui/core";
import { customStyle, customTheme } from "./styles/CustomTheme";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
	const classes = customStyle();
	return (
		<ThemeProvider theme={customTheme}>
			<div className={classes.root}>
				<Box mb={4}>
					<Typography variant="h4" align="center">
						Todo List
					</Typography>
				</Box>
				<AddTodo />
				<div className={classes.taskList}>
					<TodoList />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
