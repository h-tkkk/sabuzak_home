import { Box, Typography } from "@mui/material";
import Header from "../composition/header/header";

export default function NotFound() {
    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Header />
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"} pt={9}>
                <Typography>{"404"}</Typography>
                <Typography>{"찾을 수 없는 페이지 입니다."}</Typography>
                <Typography>{"요청하신 페이지가 사라졌거나, 잘못된 경로 입니다."}</Typography>
            </Box>
        </Box>
    );
}
