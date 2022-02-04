/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { IStore } from "types/model";

const initialState: IStore["routing"] = {
  currentPage: "quiz",
};

export const routingSlice = createSlice({
  name: "routing",
  initialState,
  reducers: {},
});

export default routingSlice.reducer;
