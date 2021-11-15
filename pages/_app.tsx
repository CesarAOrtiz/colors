import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState("");
  return (
    <>
      <Head>
        <title>Colors</title>
        <meta
          name="description"
          content="A color palette app created whit nextjs"
        />
        <meta name="author" content="César Ortiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} {...{ search, setSearch }} />
    </>
  );
}

export default App;
