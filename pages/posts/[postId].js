import { useRouter } from "next/router";
import Router from "next/router";

import { MainLayout } from "../../LayOut/mainLayout";
import { getRetrivePost } from "../../servises/reqToApi";

export default function Post({ curentPost }) {
  const router = useRouter();

  const { title, body, comments } = curentPost;
  return (
    <MainLayout>
      <h2> User {router.query.postId}</h2>
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
