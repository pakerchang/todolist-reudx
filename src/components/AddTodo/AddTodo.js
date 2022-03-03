import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slice/todoSlice";
import * as Yup from "yup";

const AddTodo = () => {
	const dispatch = useDispatch();
	const {
		control,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful },
	} = useForm({
		defaultValues: {
			task: "",
		},
	});

	// const addTaskSchema = Yup.object().shape({
	// 	task: Yup.string().required("Add a Task"),
	// });

	const onSubmit = (data, e) => {
		e.preventDefault();
		// console.log(data);
		if (data.task !== "") {
			dispatch(addTask({ task: data.task }));
			console.log("dispatch success");
		} else {
			alert("Please enter a task");
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ task: "" });
		}
	}, [isSubmitSuccessful, reset]);

	return (
		<form style={{ display: "flex", justifyContent: "space-around", width: 400 }} onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="task"
				control={control}
				render={({ field }) => <TextField {...field} label="Add a Task" variant="standard" fullWidth autoFocus />}
			/>
			<Button type="submit" variant="contained" color="primary">
				Add
			</Button>
		</form>
	);
};

export default AddTodo;
