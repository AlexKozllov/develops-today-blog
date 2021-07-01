import { createAction } from "@reduxjs/toolkit";

const getAllPostsRequest = createAction("posts/getAllPostsRequest");
const getAllPostsSuccess = createAction("posts/getAllPostsSuccess");
const getAllPostsError = createAction("posts/getAllPostsError");

export { getAllPostsRequest, getAllPostsSuccess, getAllPostsError };
