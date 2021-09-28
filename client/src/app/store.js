import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from "../features/favourites/favSlice";

export const store = configureStore({
  reducer: {
    counter: favouriteReducer,
  },
});
