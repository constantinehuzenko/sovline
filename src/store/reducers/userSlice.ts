/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { IStore } from "types/model";

const initialState: IStore["user"] = {
  language: "en",
  auth: { isSignedIn: false },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    new: (state) => {
      state.language = "en";
    },
  },
});

export default userSlice.reducer;
