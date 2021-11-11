import "../styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <p>Header</p>
            <Component {...pageProps} />
            <footer>footer</footer>
        </>
    );
}

export default App;
