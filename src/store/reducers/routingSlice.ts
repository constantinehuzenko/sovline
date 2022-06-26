/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DynamicContentTypes, IQuestionItem, IStore } from "types/model";

const initialState: IStore["routing"] = {
  currentPage: "quiz",
};

export const routingSlice = createSlice({
  name: "routing",
  initialState,
  reducers: {},
});

export default routingSlice.reducer;
