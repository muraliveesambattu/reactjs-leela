import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

// We Need to Create a Separate file To Handle Business logic . That file Contains a functionn called Reducer
