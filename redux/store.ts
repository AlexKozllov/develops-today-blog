import { MakeStore } from 'next-redux-wrapper';

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
  middleware: getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
  }),
});

// export type RootState = ReturnType<typeof rootReducer>
// export const makeStore: MakeStore = (_?: RootState): EnhancedStore => store
export { store };
