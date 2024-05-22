/* eslint-disable react-hooks/exhaustive-deps */
import { AppProps } from "next/app";
import "../styles/globals.css";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";
import MainLayout from "../composition/layout/main_layout";
import { dark_theme } from "../src/dark_theme";
import { GlobalStyles } from "@mui/material";
import { Provider } from "mobx-react";
import { RootStore } from "../rootStore/rootStore";
import Head from "next/head";

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
    mode: "dark" as "dark" | "light",
});

type MyAppProps = AppProps & {
    pageProps: {
        colorMode: { toggleColorMode: () => void };
        fontSize: { toggleFontSize: () => void };
        mode: "dark" | "light";
        themeFontSize: "small" | "large";
    };
};

const rootStore = new RootStore();
export default function MyApp(props: MyAppProps) {
    const { Component, pageProps } = props;

    const [initialRender, setInitialRender] = useState(true);
    // Color mode
    const [mode, setMode] = useState<"dark" | "light">("light");

    useEffect(() => {
        const storedMode = localStorage.getItem("colorMode") as "dark" | "light";
        if (storedMode) {
            setMode(storedMode);
        }
        setInitialRender(false);
    }, []);

    const toggleColorMode = () => {
        setMode((prevMode) => {
            const newColorMode = prevMode === "light" ? "dark" : "light";
            console.log(`새로운 컬러~ ${newColorMode}`);
            localStorage.setItem("colorMode", newColorMode);
            return newColorMode;
        });
    };

    const colorCache = useMemo(() => {
        if (mode === "light") {
            return theme;
        } else {
            return dark_theme;
        }
    }, [mode, toggleColorMode]);

    pageProps.colorMode = colorCache;
    pageProps.mode = mode;

    if (initialRender) {
        return null;
    }

    return (
        <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
            <Provider rootStore={rootStore}>
                <ThemeProvider theme={colorCache}>
                    <CssBaseline />
                    <GlobalStyles
                        styles={{
                            "@keyframes bounce": {
                                "0%, 100%": {
                                    transform: "translateY(0)", // 초기 위치
                                    animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)", // 가속도
                                },
                                "50%": {
                                    transform: "translateY(-20px)", // 최대 20px 위로 이동
                                    animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)", // 감속도
                                },
                            },
                            "@keyframes fadeMoveUp": {
                                from: {
                                    opacity: 1,
                                    transform: "translateY(0%)",
                                },
                                to: {
                                    opacity: 0,
                                    transform: "translateY(-100%)",
                                },
                            },
                            "@keyframes fadeMoveDown": {
                                from: {
                                    opacity: 0,
                                    transform: "translateY(100%)",
                                },
                                to: {
                                    opacity: 1,
                                    transform: "translateY(0%)",
                                },
                            },
                            "@keyframes fadeInOut": {
                                "0% 100%": { opacity: 1 },
                                "50%": { opacity: 0.5 },
                            },
                            ".image-animation": {
                                animation: "fadeInOut 3s ease-in-out",
                            },
                        }}
                    />
                    <Head>
                        <title>Sabuzak Studio</title>
                        <meta name="naver-site-verification" content="e28872b5016b420276e8606e6b59d8d4eb700b32" />
                        <meta name="description" content="A short description of your website." />

                        {/* Open Graph meta tags */}
                        <meta property="og:title" content="Your Website Title" />
                        <meta property="og:description" content="A short description of your website." />
                        <meta property="og:image" content="https://www.sbzsbz.com/path/to/your/image.jpg" />
                        <meta property="og:url" content="https://www.sbzsbz.com" />
                        <meta property="og:type" content="website" />

                        {/* Twitter Card meta tags */}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Your Website Title" />
                        <meta name="twitter:description" content="A short description of your website." />
                        <meta name="twitter:image" content="https://www.sbzsbz.com/path/to/your/image.jpg" />

                        <meta name="naver-site-verification" content="네이버 제공 인증 코드" />

                        <link rel="canonical" href="https://www.sbzsbz.com" />
                    </Head>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </ThemeProvider>
            </Provider>
        </ColorModeContext.Provider>
    );
}

// 100 - Thin
// 200 - Extra Light (Ultra Light)
// 300 - Light
// 400 - Normal
// 500 - Medium
// 600 - Semi Bold (Demi Bold)
// 700 - Bold
// 800 - Extra Bold (Ultra Bold)
// 900 - Black (Heavy)
