import Router from "next/router";
import Link from "next/link";
import { MainLayout } from "../Layout/MainLayout";

export default function Home() {
  const goToAuthHandler = () => {
    Router.push("/auth");
  };

  return (
    <MainLayout>
      <h2>Home page</h2>

      <Link href="/users/555">
        <a>User 555</a>
      </Link>

      <button onClick={goToAuthHandler}>Go to auth</button>
    </MainLayout>
  );
}
