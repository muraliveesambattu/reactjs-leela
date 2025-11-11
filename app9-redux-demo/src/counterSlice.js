import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
};
export const counterSlice = createSlice({
  name: "counter",
  reducers: {
    increment: (store) => {
      //   store.count ++;
      store.count += 1;
    },
    decrement: (store) => {
      store.count--;
    },
    reset: (store) => {
      store.count = 0;
    },
  },
  initialState: initialState,
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
