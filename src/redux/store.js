import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";

// import reducer
// export state and connect reducer
export default configureStore({
	reducer: {
		// reducer name should match with slice initState name
		tasks: todoReducer,
	},
});
