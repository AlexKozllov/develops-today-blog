import Link from "next/link";
import { NavBar, NavigatorLink, MainWrapper } from "./mainLayoutStyles";
// import s from "./MainLayOut.module.scss";

export function MainLayout({ children }) {
  return (
    <>
      {/* <Head></Head> */}
      <NavBar>
        <li>
          <Link href="/" passHref>
            <NavigatorLink> Latest Posts</NavigatorLink>
          </Link>
        </li>
        <li>
          <Link href="/posts/new" passHref>
            <NavigatorLink>Create Post</NavigatorLink>
          </Link>
        </li>
      </NavBar>
      <MainWrapper>{children}</MainWrapper>
    </>
  );
}
