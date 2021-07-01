import { createAction } from "@reduxjs/toolkit";

const getAllPostsRequest = createAction<number>("posts/getAllPostsRequest");
const getAllPostsSuccess = createAction<number>("posts/getAllPostsSuccess");
const getAllPostsError = createAction<number>("posts/getAllPostsError");

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

export {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsError,
  postCreatePostRequest,
  postCreatePostSuccess,
  postCreatePostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
};
