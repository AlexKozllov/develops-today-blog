import axios from "axios";

axios.defaults.baseURL = "https://simple-blog-api.crew.red";

const getBlogList = async () => {
  try {
    const response = await axios.get("/posts");
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const getRetrivePost = async (postId) => {
  try {
    const response = await axios.get(`/posts/${postId}?_embed=comments`);
    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const postCreatePost = async (massage) => {
  try {
    const response = await axios.post(`/posts`, massage);
    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const putUpdatePost = async (postId, message) => {
  try {
    const response = await axios.put(`/posts/${postId}`, message);
    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`/posts/${postId}`);
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
