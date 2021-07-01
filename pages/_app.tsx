import "../styles/main.scss";

// const MyApp = ({ Component, pageProps }) => {
//   return <Component {...pageProps} />;
// };

// export default MyApp;

import React from "react";

import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper";
// import { makeStore } from "../redux/store.js";
import App from "next/app"



// const MyApp = ({  Component, pageProps}) => {

//   // const store = useStore(pageProps.initialReduxState);
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// };
type Props = {
  Component: React.Component
  store: any
}

class MyApp extends App<Props> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    jssStyles?.parentNode?.removeChild(jssStyles)
  }

  render() {
    const { store, Component, pageProps } = this.props

    return (
      <Provider store={store}>



        <Component {...pageProps} />

      </Provider>
    )
  }
}


export default MyApp;
// export default withRedux(makeStore, {
//   debug: false,
// })(MyApp)