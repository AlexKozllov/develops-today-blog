import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsError,
  getCurrentRequest,
  getCurrentSuccess,
  getCurrentError,
  postCreatePostRequest,
  postCreatePostSuccess,
  postCreatePostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
  updatePostRequest,
  updatePostSuccess,
  updatePostError,
  createCommentRequest,
  createCommentSuccess,
  createCommentError,
} from "../actions/blogAction";

const initialList = [];
const initialPost = {
  id: 0,
  title: "",
  body: "",
  comments: [
    {
      id: 1,
      postId: 0,
      body: "",
    },
  ],
};

const postList = createReducer(initialList, {
  [getAllPostsSuccess.type]: (state, { payload }) => [...payload],
  [postCreatePostSuccess.type]: (state, { payload }) => [...state, ...payload],
  [deletePostSuccess.type]: (state, { payload }) => {
    return [...state.filter((item) => item.id !== +payload)];
  },
  [updatePostSuccess.type]: (state, { payload }) => {
    return [...state.filter((item) => item.id !== +payload), payload];
  },
});

const currentPost = createReducer(initialPost, {
  [getCurrentSuccess.type]: (state, { payload }) => ({ ...payload }),
  [createCommentSuccess.type]: (state, { payload }) => ({
    ...state,
    comments: [...state.comments, payload],
  }),
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
  [updatePostRequest.type]: () => true,
  [updatePostSuccess.type]: () => false,
  [updatePostError.type]: () => false,
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
  [updatePostRequest.type]: () => "",
  [updatePostSuccess.type]: () => "",
  [updatePostError.type]: (_, { payload }) => payload,
});

const blogReduser = combineReducers({
  postList,
  currentPost,
  error,
  loading,
});

export { blogReduser };
