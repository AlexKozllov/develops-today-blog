import { useDispatch } from "react-redux";
import { MakeStore } from "next-redux-wrapper";

import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { combineReducers } from "redux";

// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist/es/constants";

import { blogReduser } from "./reducers/blogReducer";

const rootReducer = combineReducers({
  blog: blogReduser,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// export type RootState = ReturnType<typeof rootReducer>;

// export type RootState = ReturnType<typeof store.getState>;

export default store;
