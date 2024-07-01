import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function MainText() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    const bgImg = isTablet ? "url(/img/main_section/tab_img.png)" : "url(/img/main_section/full_img.png)";
    const bgPosition = isTablet ? "right" : "center";
    const bgPositionY = isTablet ? 100 : 0;

    return (
        <Box
            sx={{
                backgroundImage: bgImg,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: bgPosition,
                backgroundPositionY: bgPositionY,
            }}
            style={{ width: "100%", height: "100%" }}
        />
    );
}
