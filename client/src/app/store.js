import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/favourites/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
