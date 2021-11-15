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
                    content="A color palette app created whit nextjs"
                />
                <meta name="author" content="César Ortiz" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default App;
