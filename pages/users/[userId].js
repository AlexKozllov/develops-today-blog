import { useRouter } from "next/router";
import Router from "next/router";

import { MainLayout } from "../../Layout/MainLayout";
export default function User() {
  const router = useRouter();

  const goToHomeHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout>
      <h2> User {router.query.userId}</h2>
      <button onClick={goToHomeHandler}>Go to Home</button>
    </MainLayout>
  );
}
