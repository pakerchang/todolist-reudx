import React from "react";
import { Box, Button, Checkbox, Typography } from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/slice/todoSlice";

const TodoItem = (props) => {
	const dispatch = useDispatch();
	const handleCheckboxClick = () => {
		dispatch(
			toggleCompleted({
				id: props.id,
				completed: !props.completed,
			})
		);
	};
	const handleDeleteClick = () => {
		dispatch(deleteTask({ id: props.id }));
	};
	return (
		<Box display="flex" alignItems="center" justifyContent="space-between">
			<Box display="flex" justifyContent="center" alignItems="center">
				<Checkbox color="primary" checked={props.completed} onClick={handleCheckboxClick} />
				<Typography>{props.task}</Typography>
			</Box>
			<Button
				variant="outlined"
				color="secondary"
				size="small"
				startIcon={<DeleteForeverOutlinedIcon />}
				onClick={handleDeleteClick}>
				Delete
			</Button>
		</Box>
	);
};

export default TodoItem;
