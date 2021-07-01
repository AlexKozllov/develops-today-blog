import Router from "next/router";
import Link from "next/link";
import { MainLayout } from "../LayOut/mainLayout";
import {
  deletePost,
  getBlogList,
  getRetrivePost,
  postCreateComment,
  postCreatePost,
  putUpdatePost,
} from "../servises/reqToApi";
import { getAllPosts } from "../redux/operations/blogOperations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializeStore } from "../redux/store";

export default function Home({ postList }) {
  // const dispatch = useDispatch();

  // const postList = useSelector((state) => state.blog.postList);
  // useEffect(() => {
  //   dispatch(getAllPosts());
  // }, []);

  return (
    <MainLayout>
      <h2>Home page</h2>

      <Link href="/posts/555">
        <a>User 555</a>
      </Link>
      <ul>
        {/* {postList.map((item) => (
          <li key={item.id}>
            <Link href="/posts/[postId]" as={`/posts/${item.id}`}>
              <a>
                <b>{item.title}</b>
                <p>{item.body}</p>
              </a>
            </Link>
          </li>
        ))} */}
      </ul>
    </MainLayout>
  );
}

export const getStaticProps = async (context) => {
  console.log("context: ", context);
  // const dispatch = useDispatch();

  // const postList = await context.store.dispatch(getAllPosts());

  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  dispatch({
    type: "TICK",
    light: false,
    lastUpdate: Date.now(),
  });

  return { props: { initialReduxState: reduxStore.getState() } };

  // return {
  //   props: { postList },
  // };
};
