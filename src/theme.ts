import { createTheme } from "@mui/material";

export const theme = createTheme({
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
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "Pretendard",
                },
            },
        },
    },
});
