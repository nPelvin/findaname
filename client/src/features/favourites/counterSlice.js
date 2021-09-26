import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		increment: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state = [...state, action.payload];
		},
		//   decrement: (state) => {
		//     state.value -= 1;
		//   },
		// Use the PayloadAction type to declare the contents of `action.payload`
		addName: (state, action) => {
			state.value = [...state.value, action.payload];
		},
		deleteName: (state, action) => {
			state.value = [...state.value.filter((item) => item.name !== action.payload.name)];
		},

		// deleteName: (state, action) => ({
		// 	...state,
		// 	value: state.value.filter((item) => item !== action.payload),
		// }),
	},
});

export const { increment, addName, deleteName } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
