import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import MyIcon from "@assets/sabuzak_icon_white.svg";

export default function Footer() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} bgcolor={"#133F7F"} height={120} px={"10%"} gap={isMobile ? 0 : 8}>
            <Box>{isMd ? null : <MyIcon fill={"#fff"} />}</Box>
            <Box display={"flex"} flexDirection={isMobile ? "column" : "row"} gap={isMobile ? 0 : 3}>
                <Typography fontFamily={"Pretendard"} fontWeight={500} sx={{ fontSize: { xs: "10px", md: "14px", lg: "16px" } }} color={"#fff"}>
                    {"Copyright 2023. Sabuzakx2studio. All rights reserved."}
                </Typography>
                <Typography fontFamily={"Pretendard"} fontWeight={500} sx={{ fontSize: { xs: "10px", md: "14px", lg: "16px" } }} color={"#fff"}>
                    {"서울특별시 강남구 학동로7길 29"}
                </Typography>
                <Typography fontFamily={"Pretendard"} fontWeight={500} sx={{ fontSize: { xs: "10px", md: "14px", lg: "16px" } }} color={"#fff"}>
                    {"02-6213-3100"}
                </Typography>
                <Typography fontFamily={"Pretendard"} fontWeight={500} sx={{ fontSize: { xs: "10px", md: "14px", lg: "16px" } }} color={"#fff"}>
                    {"sabuzakx2studio@gmail.com"}
                </Typography>
            </Box>
        </Box>
    );
}
