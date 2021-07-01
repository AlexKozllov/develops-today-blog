import axios from "axios";

axios.defaults.baseURL = "https://simple-blog-api.crew.red";

const getBlogList = async () => {
  try {
    const response = await axios.get("/posts");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const getRetrivePost = async (postId) => {
  try {
    const response = await axios.get(`/posts/${postId}?_embed=comments`);
    console.log(response.data);
    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const postCreatePost = async (postId) => {
  try {
    const response = await axios.post(`/posts`);
    console.log(response.data);
    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const putUpdatePost = async (postId, message) => {
  try {
    const response = await axios.put(`/posts/${postId}`, message);
    console.log(response.data);
    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`/posts/${postId}`);
    console.log(response.data);
    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const postCreateComment = async (postId, message) => {
  const newComment = {
    postId,
    body: message,
  };
  try {
    const response = await axios.post(`/comments`, newComment);
    console.log(response.data);
    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export {
  getBlogList,
  getRetrivePost,
  postCreatePost,
  putUpdatePost,
  deletePost,
  postCreateComment,
};
