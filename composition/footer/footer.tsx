import { Box, Typography } from "@mui/material";
import MyIcon from "@assets/sabuzak_icon_white.svg";

export default function Footer() {
    return (
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} bgcolor={"#000"} height={120} px={"10%"}>
            <Box>
                <MyIcon fill={"#fff"} />
            </Box>
            <Box display={"flex"} gap={3}>
                <Typography fontWeight={500} fontSize={18} color={"#fff"}>
                    {"Copyright 2024. Sabuzak Studio. All rights reserved."}
                </Typography>
                <Typography fontWeight={500} fontSize={18} color={"#fff"}>
                    {"서울특별시 강남구 학동로7길 29"}
                </Typography>
                <Typography fontWeight={500} fontSize={18} color={"#fff"}>
                    {"02-6213-3100"}
                </Typography>
                <Typography fontWeight={500} fontSize={18} color={"#fff"}>
                    {"sabuzakx2studio@gmail.com"}
                </Typography>
            </Box>
        </Box>
    );
}
