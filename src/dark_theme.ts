import { createTheme } from "@mui/material";
import COLORS from "./theme_custom_color/custom_color";

const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    },
};

const typographyStyles = (theme) => ({
    MuiTypography: {
        styleOverrides: {
            root: {
                lineHeight: "normal",
                fontFamily: "yg-jalnan",
                // fontSize: "0.8rem",
                // [theme.breakpoints.up("sm")]: {
                //     fontSize: "1rem",
                // },
                // [theme.breakpoints.up("lg")]: {
                //     fontSize: "1.125rem",
                // },
            },
        },
    },
});

export const dark_theme = createTheme({
    breakpoints,
    palette: {
        mode: "dark",
        background: {
            default: "#262C37",
            paper: "#F9FAFB",
        },
        text: {
            primary: COLORS.grayScale.white,
            disabled: COLORS.grayScale[60],
            secondary: COLORS.grayScale[60],
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {},
            },
        },
        ...typographyStyles(createTheme({ breakpoints })),
    },
});
