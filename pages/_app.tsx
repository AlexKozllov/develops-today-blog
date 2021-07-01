import "../styles/main.scss";

// const MyApp = ({ Component, pageProps }) => {
//   return <Component {...pageProps} />;
// };

// export default MyApp;

import React from "react";

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
// import { makeStore } from "../redux/store.js";
import App, { AppContext } from "next/app";
// import store from "../redux/store";
import { createStore } from "@reduxjs/toolkit";
import { getBlogList } from "../servises/reqToApi";
import { getAllPostsSuccess } from "../redux/actions/blogAction";

// const MyApp = ({  Component, pageProps}) => {

//   // const store = useStore(pageProps.initialReduxState);
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// };
type Props = {
  Component: React.Component;
  store: any;
};

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be access by the client
    return { pageProps: pageProps };
  }

  // componentDidMount() {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   jssStyles?.parentNode?.removeChild(jssStyles);
  // }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
// export default wrapper.withRedux(WrappedApp);
// export default MyApp;
// export default withRedux(makeStore, {
//   debug: false,
// })(MyApp)

let store;
export const initialiseStore = (preloadedState) => {
  let _store = store ?? createStore(preloadedState);

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  //initialise redux store on server side
  const reduxStore = initialiseStore({});
  const { dispatch } = reduxStore;
  const res = await getBlogList();
  dispatch(getAllPostsSuccess(res));

  appProps.pageProps = {
    ...appProps.pageProps,
    initialReduxState: reduxStore.getState(),
  };

  return appProps;
};
