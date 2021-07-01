import "../styles/main.scss";

// const MyApp = ({ Component, pageProps }) => {
//   return <Component {...pageProps} />;
// };

// export default MyApp;

import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import { store } from "../redux/store";
import { useStore } from "../redux/store";

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     const pageProps = Component.getInitialProps
//       ? await Component.getInitialProps(ctx)
//       : {};

//     return { pageProps };
//   }

//   render() {
//     const { Component, pageProps, store } = this.props;

//     return (
//       <Container>
//         <Provider store={store}>
//           <Component {...pageProps} />
//         </Provider>
//       </Container>
//     );
//   }
// }

// export default withRedux(store)(MyApp);

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
