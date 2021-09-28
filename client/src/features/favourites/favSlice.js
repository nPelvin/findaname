import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
	status: "idle",
};
export const counterSlice = createSlice({
	name: "counter",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		addName: (state, action) => {
			state.value = [...state.value, action.payload];
		},
		deleteName: (state, action) => {
			state.value = [
				...state.value.filter((item) => item.name !== action.payload.name),
			];
		},
	},
});

export const { increment, addName, deleteName } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFav = (state) => state.counter.value;

export default counterSlice.reducer;
