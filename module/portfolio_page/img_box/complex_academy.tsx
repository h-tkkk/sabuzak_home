import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function ComplexAcademy() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    if (isMobile) {
        return (
            <Box>
                <Box
                    height={225}
                    sx={{
                        backgroundImage: "url('/img/portfoilo_page/portfoilo_complex.jpg')",
                        backgroundSize: "cover",
                    }}
                >
                    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} alignItems={"center"}>
                        <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"flex-end"}>
                            {/* <img src={"/img/portfoilo_page/portfoilo_complex.jpg"} alt={`image`} style={{ width: "100%" }} /> */}
                        </Box>
                    </Box>
                </Box>
                <Box height={"auto"} bgcolor={"#FFE676"} py={3}>
                    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} alignItems={"center"}>
                        <Box display={"flex"} width={"auto"} flexDirection={"column"} alignItems={"center"} gap={2}>
                            <Box>
                                <Typography fontSize={24}>{"콤플렉스 아카데미"}</Typography>
                            </Box>
                            <Box>
                                <Typography fontSize={16} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"} textAlign={"center"}>
                                    {"콤플렉스를 극복하지 않아도\n있는 그대로의 내가 행복이다."}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography fontSize={14} fontWeight={200} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"} textAlign={"center"}>
                                    {"라미와 친구들의 우당탕탕 마법 학교 일상과\n성장기 고민, 우정 그리고 치유에 대한 이야기"}
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
                    position: "relative",
                    height: { sm: 267, md: 400, lg: 529 },
                    background: `linear-gradient(-76deg, #FFE676 46%, rgba(255, 255, 255, 0) 46%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                    fontSize: "24px",
                    "&:hover": {
                        ".hoverBox": {
                            display: "contents",
                            background: "#FFE676",
                            zIndex: 10,
                        },
                    },
                }}
            >
                <Box
                    component="img"
                    src="/img/portfoilo_page/portfoilo_complex.jpg"
                    alt="background image"
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "58.39%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: -1,
                    }}
                />
                <Box display="flex" width="100%" height="100%" alignItems="center">
                    <Box display="flex" width="50%" height="100%" alignItems="flex-end" />
                    <Box display="flex" width="auto" flexDirection="column" gap={2} sx={{ pl: { sm: "10%", mm: "12%", md: "16%", lg: "18%" } }}>
                        <Box>
                            <Typography sx={{ fontSize: { sm: 21, mm: 23, md: 28, lg: 32 } }}>{"콤플렉스 아카데미"}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: { sm: 16, mm: 17, md: 20, lg: 24 } }} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                                {"콤플렉스를 극복하지 않아도\n있는 그대로의 내가 행복이다"}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{ fontSize: { sm: 12, md: 14, lg: 16 } }}
                                fontWeight={200}
                                fontFamily={"Pretendard"}
                                whiteSpace={"pre-wrap"}
                            >
                                {"라미와 친구들의 우당탕탕 마법 학교 일상과\n성장기 고민, 우정 그리고 치유에 대한 이야기"}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                {/* <Box
                    className="hoverBox"
                    sx={{
                        position: "absolute",
                        zIndex: -1,
                    }}
                >
                    <Typography>{"콤플렉스 아카데이 페이지"}</Typography>
                </Box> */}
            </Box>
        );
    }
}
