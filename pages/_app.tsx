import "../styles/main.scss";

import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { getAllPosts } from "../redux/operations/blogOperations";
import { wrapper } from "../redux/store";

const App = ({ Component, pageProps }) => {
  console.log("-----------------___APP", { pageProps });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return <Component {...pageProps} />;
};

// export const getStaticProps = wrapper.getStaticProps(
//   (store) =>
//     ({ preview }) => {
//       console.log("2. Page.getStaticProps uses the store to dispatch things");
//       store.dispatch(getAllPosts());
//     }
// );

export default wrapper.withRedux(App);
