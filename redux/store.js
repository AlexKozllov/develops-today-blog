import {
  configureStore,
  createStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { useMemo } from "react";
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

function initStore(preloadedState = initialState) {
  return createStore(
    rootReducer,
    preloadedState
    // composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

export { store };
