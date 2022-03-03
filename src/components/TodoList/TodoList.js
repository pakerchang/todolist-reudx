import { Box } from "@material-ui/core";
import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
	const todos = useSelector((state) => state.tasks);
	console.log(todos);
	return (
		<Box display="flex" flexDirection="column" justifyContent="flex-start">
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} />
			))}
		</Box>
	);
};

export default TodoList;
