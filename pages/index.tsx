import Link from "next/link";
import { MainLayout } from "../LayOut/MainLayout";

import { getAllPosts } from "../redux/operations/blogOperations";
import { useDispatch, useSelector } from "react-redux";

import { wrapper } from "../redux/store";
import { useEffect } from "react";
import { getBlogList } from "../servises/reqToApi";

interface RootState {
  blogReduser: { postList: string[] };
}

export default function Home({ posts: serverPosts }) {
  console.log("posts: ", serverPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    const load = async () => {
      dispatch(getAllPosts());
    };
    if (!serverPosts) {
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverPosts]);
  const postList = useSelector(
    (state: RootState) => state.blogReduser.postList
  );
  console.log("postList: ", postList);

  return (
    <MainLayout>
      <ul>
        {postList.map((item: any) => (
          <li key={item.id}>
            <Link href="/posts/[postId]" as={`/posts/${item.id}`}>
              <a>
                <b>{item.title}</b>
                <p>{item.body}</p>
              </a>
            </Link>
            {/* <button onClick={onDeleteHandler} data-postid={item.id}>
                Delete post
              </button> */}
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Home.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ pathname, req, res }) => {
      if (!req) {
        return { posts: null };
      }
      console.log("2. Page.getInitialProps uses the store to dispatch things");
      const posts = await store.dispatch(getAllPosts());
      return { posts };
    }
);

// Home.getInitialProps = async (ctx) => {
//   if (!ctx.req) {
//     return { posts: null };
//   }
//   const posts = await getBlogList();

//   return { posts };
// };

// export async function getServerSideProps({ qery, req }) {
//   // if (!req) {
//   //   return { posts: null };
//   // }
//   const posts = await getBlogList();

//   if (!posts) {
//     return {
//       posts: null,
//     };
//   }
//   return {
//     props: { posts }, // will be passed to the page component as props
//   };
// }
