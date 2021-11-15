import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState("");
  const [navBg, setNavBg] = useState("#FFFFFF");

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
      <div style={{ backgroundColor: navBg }}>
        <nav className="navbar">
          <div className="navContent">
            <Link href="/">
              <a className="navItem">Colors</a>
            </Link>
            <Link href="/picker">
              <a className="navItem">Picker</a>
            </Link>
          </div>
        </nav>
      </div>
      <Component {...pageProps} {...{ search, setSearch, navBg, setNavBg }} />
    </>
  );
}

export default App;
