import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import InstarIcon from "@assets/mdi_instagram.svg";

export default function SsyongMargazine() {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleButtonClick = () => {
        window.open("https://www.instagram.com/ssyong.ssyong_magazine/", "_blank");
    };

    if (isMobile) {
        return (
            <Box>
                <Box
                    height={225}
                    sx={{
                        backgroundImage: "url('/img/port_img/port_ssong_bg.png')",
                    }}
                >
                    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} alignItems={"center"}>
                        <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"flex-end"}>
                            <img src={"/img/character_ssong.png"} alt={`image`} style={{ width: "100%", height: "inherit", objectFit: "contain" }} />
                        </Box>
                    </Box>
                </Box>
                <Box height={"auto"} bgcolor={"#D2EFFF"} py={3}>
                    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} alignItems={"center"}>
                        <Box display={"flex"} width={"auto"} flexDirection={"column"} alignItems={"center"} gap={2}>
                            <Box>
                                <Typography fontSize={24}>{"쑝쑝 매거진"}</Typography>
                            </Box>
                            <Box>
                                <Typography fontSize={16} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"} textAlign={"center"}>
                                    {"겁많은 홀랭, 충격반전 개꿀쓰,못말리는 올이,그리고\n 그놈은 쓉 양아치-기타 등등.. 그들이 모였다!"}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography fontSize={14} fontWeight={200} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                                    {"그 시절.. 그 감성.. 그 만화.. \n그리고 얼렁뚱땅 한 방울;;; \n새롭고 개성 넘치는 말장난 \n코믹-쑝쑝 매거진"}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    } else {
        return (
            <Box
                className="boxWithDiagonalShadow_2"
                sx={{
                    height: { sm: 267, md: 400, lg: 529 },
                    background: `linear-gradient(-76deg, #D2EFFF 46%, rgba(255, 255, 255, 0) 46%), url('/img/port_img/port_ssong_bg.png')`,
                    // background: "linear-gradient(-76deg, #D2EFFF 46%, #DAD7F9 46%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                    fontSize: "24px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                }}
            >
                <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"center"}>
                    <Box display={"flex"} width={"50%"} height={"100%"} alignItems={"center"}>
                        <img src={isMd ? "/img/tab_character_ssong.png" : "/img/character_ssong.png"} alt={`image`} style={{ width: "100%" }} />
                    </Box>
                    <Box
                        display={"flex"}
                        width={"auto"}
                        flexDirection={"column"}
                        gap={2}
                        sx={{ pl: { sm: "10%", mm: "12%", md: "16%", lg: "18%" } }}
                        mt={isMd ? 3 : 5}
                    >
                        <Box>
                            <Typography sx={{ fontSize: { sm: 21, mm: 23, md: 28, lg: 32 } }}>{"쑝쑝 매거진"}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: { sm: 16, mm: 17, md: 20, lg: 24 } }} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                                {"겁많은 홀랭, 충격반전 개꿀쓰,\n못말리는 올이,\n그리고 그놈은 쓉 양아치-\n기타 등등.. 그들이 모였다!"}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{ fontSize: { sm: 12, md: 14, lg: 16 } }}
                                fontWeight={200}
                                fontFamily={"Pretendard"}
                                whiteSpace={"pre-wrap"}
                            >
                                {"그 시절.. 그 감성.. 그 만화..\n그리고 얼렁뚱땅 한 방울;;;\n새롭고 개성 넘치는 말장난\n코믹-쑝쑝 매거진"}
                            </Typography>
                        </Box>
                        <Box display={"flex"} justifyContent={"flex-end"} width={"100%"} mt={isMd ? 0 : 1.75}>
                            <Button startIcon={<InstarIcon />} onClick={handleButtonClick} sx={{ textTransform: "none" }}>
                                <Typography fontFamily={"Pretendard"} fontSize={12} fontWeight={500} color={"#000"}>
                                    {"Instagram"}
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}
