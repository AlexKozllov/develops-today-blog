import Link from "next/link";
import { MainLayout } from "../LayOut/MainLayout";

import { getAllPosts } from "../redux/operations/blogOperations";
import { useDispatch, useSelector } from "react-redux";

import { wrapper } from "../redux/store";
import { useEffect } from "react";

import { PostsList, PostsListItem } from "../styles/postsStyles";
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
      <PostsList>
        {postList.map((item: any) => (
          <PostsListItem key={item.id}>
            <Link href="/posts/[postId]" as={`/posts/${item.id}`}>
              <a>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </a>
            </Link>
          </PostsListItem>
        ))}
      </PostsList>
    </MainLayout>
  );
}

Home.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ pathname, req, res }) => {
      console.log("2. Page.getInitialProps uses the store to dispatch things");
      const posts = await store.dispatch(getAllPosts());
      return { posts };
    }
);
