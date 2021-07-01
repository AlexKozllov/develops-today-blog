import {
  deletePost,
  getBlogList,
  postCreatePost,
} from "../../servises/reqToApi";
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

const getAllPosts = () => async (dispatch) => {
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

const drlrtePost = (postId) => async (dispatch) => {
  dispatch(deletePostRequest());
  try {
    const posts = await deletePost(postId);

    dispatch(deletePostSuccess(postId));
  } catch (error) {
    dispatch(deletePostError(error));
  }
};

export { getAllPosts, addPost, drlrtePost };
