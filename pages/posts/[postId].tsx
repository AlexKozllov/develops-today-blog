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
import { useEffect } from "react";
import { getCurrentSuccess } from "../../redux/actions/blogAction";
import {
  PostStyles,
  UpdateformStyles,
  CreateCommentStyles,
  DelettedButton,
} from "./postIdStyles";

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
    const { value } = e.target;
    setComment(value);
  };

  const commentHandler = (e) => {
    e.preventDefault();
    const { postId } = router.query;
    dispatch(createComment(postId, comment));
  };

  const { title, body, comments } = currentStorPost;
  return (
    <MainLayout>
      <PostStyles>
        <h2>{title}</h2>
        <p className="bodyPost">{body}</p>
        <hr></hr>
        {comments.length !== 0 ? (
          <p className="commentHeader">Comments</p>
        ) : (
          <p className="commentHeader">Make your first comment.</p>
        )}
        {comments.length !== 0 && (
          <ul className="comentsList">
            {comments.map((item) => (
              <li className="commentItem" key={item.id}>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        )}
      </PostStyles>
      <UpdateformStyles onSubmit={updatePostHandler}>
        <p className="updateHeader">Update a post</p>
        <div className="updateWrapper">
          <label>
            <span>New title: </span>
            <input
              className="inputTitle"
              type="text"
              name="title"
              value={updateValue.title}
              onChange={updateInputhandler}
            />
          </label>
          <label>
            <span>New title: </span>
            <textarea
              className="inputBody"
              name="body"
              value={updateValue.body}
              onChange={updateInputhandler}
            />
          </label>
          <input className="updateSubmit" type="submit" value="Update" />
        </div>
      </UpdateformStyles>
      <CreateCommentStyles onSubmit={commentHandler}>
        <p className="commentHeader">Create a comment</p>
        <div className="commentWrapper">
          <label>
            <span>Message</span>
            <textarea
              className="inputBody"
              name="body"
              value={comment}
              onChange={commentInputhandler}
            />
          </label>
          <input
            className="commentSubmit"
            type="submit"
            value="Create a comment"
          />
        </div>
      </CreateCommentStyles>
      <DelettedButton onClick={onDeleteHandler}>Delete post</DelettedButton>
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
