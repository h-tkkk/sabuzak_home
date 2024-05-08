import { createTheme } from "@mui/material";
import COLORS from "./theme_custom_color/custom_color";

export const dark_theme = createTheme({
    palette: {
        mode: "light",
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
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "Pretendard",
                },
            },
        },
    },
});
