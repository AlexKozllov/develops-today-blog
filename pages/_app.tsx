import "../styles/main.scss";

import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { getAllPosts } from "../redux/operations/blogOperations";
import { wrapper } from "../redux/store";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
