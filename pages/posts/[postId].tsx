import { useRouter } from "next/router";
import Router from "next/router";

import { MainLayout } from "../../LayOut/MainLayout";
import { getRetrivePost } from "../../servises/reqToApi";
import { useDispatch } from "react-redux";
import {
  deleteCurrentPost,
  updatePost,
} from "../../redux/operations/blogOperations";
import { useState } from "react";
const initialState = { title: "", body: "" };
export default function Post({ curentPost }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [updateValue, setUpdateValue] = useState({ ...initialState });

  const onDeleteHandler = () => {
    const { postId } = router.query;
    dispatch(deleteCurrentPost(postId));
    Router.push("/");
  };

  const updateInputhandler = (e) => {
    const { name, value } = e.target;
    setUpdateValue({ ...updateValue, [name]: value });
  };

  const updatePostHandler = (e) => {
    e.preventDefault();
    const { postId } = router.query;
    dispatch(updatePost(postId, updateValue));
    setUpdateValue({ ...initialState });
    Router.push("/");
  };

  const { title, body, comments } = curentPost;
  return (
    <MainLayout>
      <div>
        <p>{title}</p>
        <p>{body}</p>
        <ul>
          {comments.map((item) => (
            <li key={item.id}>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={updatePostHandler}>
        <p>Update a post</p>
        <label>
          <span>New title</span>
          <input
            type="text"
            name="title"
            value={updateValue.title}
            onChange={updateInputhandler}
          />
        </label>
        <label>
          <span>New title</span>
          <input
            type="text"
            name="body"
            value={updateValue.body}
            onChange={updateInputhandler}
          />
        </label>
        <input type="submit" value="Update" />
      </form>
      <button onClick={onDeleteHandler}>Delete post</button>
    </MainLayout>
  );
}
export const getServerSideProps = async (context) => {
  const { postId } = context.query;
  const curentPost = await getRetrivePost(postId);

  return {
    props: { curentPost },
  };
};
