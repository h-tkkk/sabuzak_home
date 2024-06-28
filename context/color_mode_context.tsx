"use client";

import { createContext } from "react";

const ColorModeContext = createContext({
    toggleColorMode: () => {},
    mode: "dark" as "dark" | "light",
});

export default ColorModeContext;
