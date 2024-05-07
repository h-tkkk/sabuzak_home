/* eslint-disable react-hooks/exhaustive-deps */
import { AppProps } from "next/app";
import "../styles/globals.css";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";
import MainLayout from "../composition/layout/main_layout";
import { dark_theme } from "../src/dark_theme";

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

export default function MyApp(props: MyAppProps) {
    const { Component, pageProps } = props;

    const [initialRender, setInitialRender] = useState(true);
    // Color mode
    const [mode, setMode] = useState<"dark" | "light">("dark");

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
            <ThemeProvider theme={colorCache}>
                <CssBaseline />
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
