import { createTheme } from "@mui/material";

// m => 430

// 768

// table => 768
const breakpoints = {
    values: {
        xs: 0,
        sm: 600, //
        // _test: 768,
        md: 960, //
        lg: 1280, //
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

export const theme = createTheme({
    breakpoints,
    palette: {
        mode: "light",
        background: {
            default: "#FDFCF9",
            paper: "#F9FAFB",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {},
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1rem",
                },
            },
        },
        ...typographyStyles(createTheme({ breakpoints })),
    },
});
