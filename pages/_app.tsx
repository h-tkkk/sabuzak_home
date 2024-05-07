import { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";

type MyAppProps = AppProps & {
    pageProps: {
        colorMode: { toggleColorMode: () => void };
        fontSize: { toggleFontSize: () => void };
        mode: "dark" | "light";
        themeFontSize: "small" | "large";
    };
};

export default function MyApp(props: MyAppProps) {
    return (
        <div>
            <h1>사부작~ SPA</h1>
        </div>
    );
}
