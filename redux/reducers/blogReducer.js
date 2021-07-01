import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsError,
} from "../actions/blogAction";

const initialCalculate = {
  postList: [],
};

const postList = createReducer(initialCalculate, {
  [getAllPostsSuccess]: (state, { payload }) => {
    console.log("payload: ", payload);
    return payload;
  },
});

const loading = createReducer(false, {
  [getAllPostsRequest]: () => true,
  [getAllPostsSuccess]: () => false,
  [getAllPostsError]: () => false,
});

const error = createReducer(null, {
  [getAllPostsError]: (_, { payload }) => payload,
  [getAllPostsRequest]: () => "",
  [getAllPostsSuccess]: () => "",
});

const blogReduser = combineReducers({
  postList,
  error,
  loading,
});

export { blogReduser };
