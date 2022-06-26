/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStore } from "types/model";

const initialState: IStore["counter"] = 1;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<number>) => {
      state = action.payload;
    },
  },
});

export const { setCounter } = counterSlice.actions;

export default counterSlice.reducer;
