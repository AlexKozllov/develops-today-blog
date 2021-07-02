import { useState } from "react";
import { useDispatch } from "react-redux";
import { MainLayout } from "../../LayOut/MainLayout";
import { addPost } from "../../redux/operations/blogOperations";
import Router from "next/router";

const initialState = { title: "", body: "" };
const CreateMessage = () => {
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState(initialState);

  const onInputHandler = (e) => {
    const { name, value } = e.target;
    // @ts-ignore: Unreachable code error
    setNewPost({ ...newPost, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addPost(newPost));
    setNewPost({ ...initialState });
    Router.push("/");
  };
  return (
    <MainLayout>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>
            <span>Title</span>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={onInputHandler}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Message</span>
            <input
              type="text"
              name="body"
              value={newPost.body}
              onChange={onInputHandler}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </MainLayout>
  );
};

export default CreateMessage;
