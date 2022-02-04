import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./reducers/questionsSlice";
import routingSlice from "./reducers/routingSlice";
import userSlice from "./reducers/userSlice";

export const rootReducer = combineReducers({
  user: userSlice,
  routing: routingSlice,
  questions: questionsSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
