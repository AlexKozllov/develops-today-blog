import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsError,
  postCreatePostRequest,
  postCreatePostSuccess,
  postCreatePostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
} from "../actions/blogAction";

const initialList = [];

const postList = createReducer(initialList, {
  [getAllPostsSuccess.type]: (state, { payload }) => [...payload],
  [postCreatePostSuccess.type]: (state, { payload }) => [...state, ...payload],
  [deletePostSuccess.type]: (state, { payload }) => {
    console.log(`payload`, +payload);
    return [...state.filter((item) => item.id !== +payload)];
  },
});

const loading = createReducer(false, {
  [getAllPostsRequest.type]: () => true,
  [getAllPostsSuccess.type]: () => false,
  [getAllPostsError.type]: () => false,
  [postCreatePostRequest.type]: () => true,
  [postCreatePostSuccess.type]: () => false,
  [postCreatePostError.type]: () => false,
  [deletePostRequest.type]: () => true,
  [deletePostSuccess.type]: () => false,
  [deletePostError.type]: () => false,
});

const error = createReducer(null, {
  [getAllPostsRequest.type]: () => "",
  [getAllPostsSuccess.type]: () => "",
  [getAllPostsError.type]: (_, { payload }) => payload,
  [postCreatePostRequest.type]: () => "",
  [postCreatePostSuccess.type]: () => "",
  [postCreatePostError.type]: (_, { payload }) => payload,
  [deletePostRequest.type]: () => "",
  [deletePostSuccess.type]: () => "",
  [deletePostError.type]: (_, { payload }) => payload,
});

const blogReduser = combineReducers({
  postList,
  error,
  loading,
});

export { blogReduser };
