import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function TwoTitle() {
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    let mainTitleFont = isLg ? 44 : isMd ? (isMobile ? 18 : 24) : 36;
    let subTitleFont = isLg ? 16 : isMd ? (isMobile ? 12 : 14) : 18;

    return (
        <Box display={"flex"} flexDirection={"column"} gap={3}>
            <Box>
                <Typography fontWeight={900} color={"#fff"} fontSize={mainTitleFont}>
                    {"다양한 캐릭터가 만들어내는"}
                </Typography>
                <Typography fontWeight={900} color={"#fff"} fontSize={mainTitleFont}>
                    {"색다른 이야기들이 기다립니다."}
                </Typography>
            </Box>
            <Box>
                <Typography fontFamily={"Pretendard"} fontWeight={400} color={"#fff"} fontSize={subTitleFont}>
                    {"때로는 마법을 배우기도 하고"}
                </Typography>
                <Typography fontFamily={"Pretendard"} fontWeight={400} color={"#fff"} fontSize={subTitleFont}>
                    {"친구들과 어려움을 극복하기도 하죠."}
                </Typography>
                <Typography fontFamily={"Pretendard"} fontWeight={400} color={"#fff"} fontSize={subTitleFont}>
                    {"꿈을 이루기 위한 노력을 하고"}
                </Typography>
                <Typography fontFamily={"Pretendard"} fontWeight={400} color={"#fff"} fontSize={subTitleFont}>
                    {"더욱 넓은 세상을 마주하기도 합니다."}
                </Typography>
                <Typography fontFamily={"Pretendard"} fontWeight={400} color={"#fff"} fontSize={subTitleFont}>
                    {"재미있는 이야기를 통해 웃음을 만들기도 합니다."}
                </Typography>
            </Box>
        </Box>
    );
}
