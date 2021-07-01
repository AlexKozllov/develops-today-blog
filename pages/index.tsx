import Router from "next/router";
import Link from "next/link";
import { MainLayout } from "../LayOut/MainLayout";
import {
  deletePost,
  getBlogList,
  getRetrivePost,
  postCreateComment,
  postCreatePost,
  putUpdatePost,
} from "../servises/reqToApi";
import { drlrtePost, getAllPosts } from "../redux/operations/blogOperations";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
// import { RootState } from "app/redux/store";
import { useEffect } from "react";
// import store, { useAppDispatch } from "../redux/store";
import { getAllPostsSuccess } from "../redux/actions/blogAction";
// import { store } from "../redux/store";
interface RootState {
  blog: { postList: string[] };
}

export default function Home({ getedPosts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllPostsSuccess(getedPosts));
  }, []);
  const postList = useSelector((state: RootState) => state.blog.postList);
  console.log("postList: ", postList);

  const onDeleteHandler = (e) => {
    const { postid } = e.target.dataset;
    dispatch(drlrtePost(postid));
  };

  return (
    <MainLayout>
      <h2>Home page</h2>

      <Link href="/posts/555">
        <a>User 555</a>
      </Link>
      <ul>
        {postList.length &&
          postList.map((item: any) => (
            <li key={item.id}>
              <Link href="/posts/[postId]" as={`/posts/${item.id}`}>
                <a>
                  <b>{item.title}</b>
                  <p>{item.body}</p>
                </a>
              </Link>
              <button onClick={onDeleteHandler} data-postid={item.id}>
                Delete post
              </button>
            </li>
          ))}
      </ul>
    </MainLayout>
  );
}

// export const getStaticProps = async (context) => {
//   console.log("context: ", context);
//   // const dispatch = useDispatch();
//   const getedPosts = await getBlogList();
//   // console.log('store: ', await store.dispatch(getAllPosts()));
//   // console.log('postList: ', postList);

//   // const postList = await context.store(getAllPosts());
//   // const postList = await getAllPosts();
//   // const postList = await getBlogList()

//   // return { props: { initialReduxState: reduxStore.getState() } };

//   return {
//     props: { getedPosts },
//   };
// };
