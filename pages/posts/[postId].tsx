import { useRouter } from "next/router";
import Router from "next/router";

import { MainLayout } from "../../LayOut/MainLayout";
import { getRetrivePost } from "../../servises/reqToApi";
import { useDispatch, useSelector } from "react-redux";
import {
  createComment,
  deleteCurrentPost,
  updatePost,
} from "../../redux/operations/blogOperations";
import { useState } from "react";
import { wrapper } from "../../redux/store";
import { useEffect } from "react";
import {
  createCommentSuccess,
  getCurrentSuccess,
} from "../../redux/actions/blogAction";
import { Title } from "./postIdStyles";

interface RootState {
  blogReduser: { currentPost: any };
}

const initialState = { title: "", body: "" };
export default function Post({ curentPost }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [updateValue, setUpdateValue] = useState({ ...initialState });
  const [comment, setComment] = useState("");
  const currentStorPost = useSelector(
    (state: RootState) => state.blogReduser.currentPost
  );
  useEffect(() => {
    dispatch(getCurrentSuccess(curentPost));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const commentInputhandler = (e) => {
    const { name, value } = e.target;
    setComment(value);
  };

  const commentHandler = (e) => {
    e.preventDefault();
    const { postId } = router.query;
    dispatch(createComment(postId, comment));

    // setUpdateValue("");
    // Router.push("/");
  };

  const { title, body, comments } = currentStorPost;
  return (
    <MainLayout>
      <Title>
        <p>{title}</p>
        <p>{body}</p>
        <ul>
          {comments.map((item) => (
            <li key={item.id}>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </Title>
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
      <form onSubmit={commentHandler}>
        <p>Create a comment</p>

        <label>
          <span>Message</span>
          <input
            type="text"
            name="body"
            value={comment}
            onChange={commentInputhandler}
          />
        </label>
        <input type="submit" value="Create a comment" />
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

// Post.getInitialProps = wrapper.getInitialPageProps(
//   (store) =>
//     async ({ query, req, res }) => {
//       console.log("pathname: ", query);
//       // if (!req) {
//       //   return { posts: null };
//       // }

//       const curentPost = await store.dispatch(getRetrivePost(query.postId));
//       return { curentPost };
//     }
// );
