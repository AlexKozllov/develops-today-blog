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

export default function Home({ blogList }) {
  const goToAuthHandler = () => {
    // getBlogList();
    // postCreateComment(9, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    // getRetrivePost(9);
  };
  // console.log(blogList);
  return (
    <MainLayout>
      <h2>Home page</h2>

      <Link href="/posts/555">
        <a>User 555</a>
      </Link>
      <ul>
        {blogList.map((item) => (
          <li key={item.id}>
            <Link href="/posts/[postId]" as={`/posts/${item.id}`}>
              <a>
                <b>{item.title}</b>
                <p>{item.body}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

export const getStaticProps = async (context) => {
  const blogList = await getBlogList();
  return {
    props: { blogList },
  };
};
