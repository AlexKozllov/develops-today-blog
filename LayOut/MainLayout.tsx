import Link from "next/link";
import Head from "next/head";
import s from "./MainLayOut.module.scss";

export function MainLayout({ children }) {
  return (
    <>
      {/* <Head></Head> */}
      <nav className={s.navigation}>
        <Link href="/">
          <a className={s["navigationLink"]}> Latest Posts</a>
        </Link>
       
        <Link href="/posts/new">
          <a className={s["navigationLink"]}>Create Post</a>
        </Link>
      </nav>
      <main className={s.container}>{children}</main>
    </>
  );
}
