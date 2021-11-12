import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Colors</title>
                <meta
                    name="description"
                    content="A colors palette app created whit nextjs"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default App;
