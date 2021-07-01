import { getBlogList } from "../../servises/reqToApi";
import {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsError,
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

export { getAllPosts };
