import { createAction } from "@reduxjs/toolkit";

const getAllPostsRequest = createAction<number>("posts/getAllPostsRequest");
const getAllPostsSuccess = createAction<number>("posts/getAllPostsSuccess");
const getAllPostsError = createAction<number>("posts/getAllPostsError");

const getCurrentRequest = createAction<number>("posts/getCurrentRequest");
const getCurrentSuccess = createAction<number>("posts/getCurrentSuccess");
const getCurrentError = createAction<number>("posts/getCurrentError");

const postCreatePostRequest = createAction<number>(
  "posts/postCreatePostRequest"
);
const postCreatePostSuccess = createAction<number>(
  "posts/postCreatePostSuccess"
);
const postCreatePostError = createAction<number>("posts/postCreatePostError");

const deletePostRequest = createAction<number>("posts/deletePostRequest");
const deletePostSuccess = createAction<number>("posts/deletePostSuccess");
const deletePostError = createAction<number>("posts/deletePostError");

const updatePostRequest = createAction<number>("posts/updatePostRequest");
const updatePostSuccess = createAction<number>("posts/updatePostSuccess");
const updatePostError = createAction<number>("posts/updatePostError");

const createCommentRequest = createAction<number>("posts/createCommentRequest");
const createCommentSuccess = createAction<number>("posts/createCommentSuccess");
const createCommentError = createAction<number>("posts/createCommentError");

export {
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
};
