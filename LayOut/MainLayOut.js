import Link from "next/link";
import Head from "next/head";
import s from "./MainLayOut.module.scss";

export function MainLayout({ children }) {
  return (
    <>
      <Head></Head>
      <nav className={s.navigation}>
        <Link href="/">
          <a className={s["navigationLink"]}>Main</a>
        </Link>
        <Link href="/auth">
          <a className={s["navigationLink"]}>Auth</a>
        </Link>
        <Link href="/users">
          <a className={s["navigationLink"]}>Users</a>
        </Link>
      </nav>
      <main className={s.container}>{children}</main>
    </>
  );
}
