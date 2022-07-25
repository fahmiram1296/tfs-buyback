import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.scss";
import '../styles/feature/main.scss';

import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
      useEffect(() => {
        typeof document !== undefined
          ? require("bootstrap/dist/js/bootstrap")
          : null;
      }, []);
  return (
    <>
      <Head>
        <title>Financial Service</title>
        <meta name="description" content="Financial Service app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
