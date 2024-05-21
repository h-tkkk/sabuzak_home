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
                        backgroundImage: "url('/img/port_img/port_coplex_bg.png')",
                        backgroundSize: "cover",
                    }}
                >
                    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} alignItems={"center"}>
                        <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"flex-end"}>
                            <img src={"/img/character_comp.png"} alt={`image`} style={{ width: "100%" }} />
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
                                <Typography fontSize={16} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                                    {"콤플렉스를 극복하지 않아도\n있는 그대로의 내가 행복이다."}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography fontSize={14} fontWeight={200} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                                    {"라미와 친구들의 마법 학교 일상을 통해 보여주는\n여러가지 콤플렉스와 그를 통해 성장하는 이야기"}
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
                    background: `linear-gradient(-76deg, #FFE676 46%, rgba(255, 255, 255, 0) 46%), url('/img/port_img/port_coplex_bg.png')`,
                    // background: "linear-gradient(-76deg, #FFF8D6 46%, #FFE676 46%)",
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
                    <Box display={"flex"} width={"50%"} height={"100%"} alignItems={"flex-end"}>
                        <img src={"/img/character_comp.png"} alt={`image`} style={{ width: "100%" }} />
                    </Box>
                    <Box display={"flex"} width={"auto"} flexDirection={"column"} gap={2} sx={{ pl: { sm: "10%", mm: "12%", md: "16%", lg: "18%" } }}>
                        <Box>
                            <Typography sx={{ fontSize: { sm: 21, mm: 23, md: 28, lg: 32 } }}>{"콤플렉스 아카데미"}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: { sm: 16, mm: 17, md: 20, lg: 24 } }} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                                {"콤플렉스를 극복하지 않아도\n있는 그대로의 내가 행복이다."}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{ fontSize: { sm: 12, md: 14, lg: 16 } }}
                                fontWeight={200}
                                fontFamily={"Pretendard"}
                                whiteSpace={"pre-wrap"}
                            >
                                {"라미와 친구들의 마법 학교 일상을 통해 보여주는\n아이들의 콤플렉스와 성장하는 이야기"}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}
