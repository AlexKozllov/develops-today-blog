import {
  deletePost,
  getBlogList,
  postCreateComment,
  postCreatePost,
  putUpdatePost,
} from "../../servises/reqToApi";
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

const getAllPosts = () => async (dispatch) => {
  dispatch(getAllPostsRequest());
  try {
    const posts = await getBlogList();

    dispatch(getAllPostsSuccess(posts));
  } catch (error) {
    dispatch(getAllPostsError(error));
  }
};
const getCurrentPosts = () => async (dispatch) => {
  dispatch(getAllPostsRequest());
  try {
    const posts = await getBlogList();

    dispatch(getAllPostsSuccess(posts));
  } catch (error) {
    dispatch(getAllPostsError(error));
  }
};
const addPost = (massage) => async (dispatch) => {
  dispatch(postCreatePostRequest());
  try {
    const posts = await postCreatePost(massage);

    dispatch(postCreatePostSuccess(posts));
  } catch (error) {
    dispatch(postCreatePostError(error));
  }
};

const deleteCurrentPost = (postId) => async (dispatch) => {
  dispatch(deletePostRequest());
  try {
    const posts = await deletePost(postId);

    dispatch(deletePostSuccess(postId));
  } catch (error) {
    dispatch(deletePostError(error));
  }
};

const updatePost = (postId, message) => async (dispatch) => {
  dispatch(updatePostRequest());
  try {
    const posts = await putUpdatePost(postId, message);

    dispatch(updatePostSuccess(postId));
  } catch (error) {
    dispatch(updatePostError(error));
  }
};

const createComment = (postId, message) => async (dispatch) => {
  dispatch(createCommentRequest());
  try {
    const comment = await postCreateComment(postId, message);

    dispatch(createCommentSuccess(comment));
  } catch (error) {
    dispatch(createCommentError(error));
  }
};

export {
  getAllPosts,
  getCurrentPosts,
  addPost,
  deleteCurrentPost,
  updatePost,
  createComment,
};
