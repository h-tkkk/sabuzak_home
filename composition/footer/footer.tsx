import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography fontWeight={700}>서울특별시 강남구 학동로7길 29</Typography>
            <Box display={"flex"}>
                <Typography>sabuzakx2studio@gmail.com</Typography>
                <Typography>{" | "}</Typography>
                <Typography>02-6213-3100</Typography>
            </Box>
        </Box>
    );
}
