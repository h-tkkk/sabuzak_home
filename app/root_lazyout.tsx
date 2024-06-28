"use client";

import "../styles/globals.css";
import { CssBaseline, ThemeProvider, GlobalStyles } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { Provider } from "mobx-react";
import MainLayout from "../composition/layout/main_layout";
import { theme } from "../src/theme";
import { dark_theme } from "../src/dark_theme";
import ColorModeContext from "../context/color_mode_context";
import { RootStore } from "../rootStore/rootStore";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

const DEFAULT_SEO = {
    title: "Sabuzakx2 Studio",
    description: "사부작사부작 스튜디오",
    canonical: "https://www.sbzsbz.com",
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://www.sbzsbz.com",
        title: "사부작사부작 스튜디오",
        site_name: "사부작사부작 스튜디오",
        images: [
            {
                url: "https://www.sbzsbz.com/img/main_section/full_img.png",
                width: 285,
                height: 167,
                alt: "mainImage",
            },
        ],
    },
    keywords: "sbz,사부작 스튜디오,사부작,햄밍웨이,콤플렉스 아카데미,쑝쑝 메거진,꾀죄죄한작은숲,꾀작숲,사부작사부작스튜디오",
    twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
    },
};

const rootStore = new RootStore();

export default function RootLazyout({ children }) {
    const [initialRender, setInitialRender] = useState(true);
    const [mode, setMode] = useState<"light" | "dark">("light");

    useEffect(() => {
        const storedMode = localStorage.getItem("colorMode") as "light" | "dark";
        if (storedMode) {
            setMode(storedMode);
        }
        setInitialRender(false);
    }, []);

    const toggleColorMode = () => {
        setMode((prevMode) => {
            const newColorMode = prevMode === "light" ? "dark" : "light";
            localStorage.setItem("colorMode", newColorMode);
            return newColorMode;
        });
    };

    const colorCache = useMemo(() => (mode === "light" ? theme : dark_theme), [mode]);

    if (initialRender) {
        return null;
    }

    return (
        <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
            <DefaultSeo {...DEFAULT_SEO} />
            <Provider rootStore={rootStore}>
                <ThemeProvider theme={colorCache}>
                    <CssBaseline />
                    <GlobalStyles
                        styles={{
                            "@keyframes bounce": {
                                "0%, 100%": {
                                    transform: "translateY(0)",
                                    animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                                },
                                "50%": {
                                    transform: "translateY(-20px)",
                                    animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
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
                    <MainLayout>{children}</MainLayout>
                </ThemeProvider>
            </Provider>
        </ColorModeContext.Provider>
    );
}
