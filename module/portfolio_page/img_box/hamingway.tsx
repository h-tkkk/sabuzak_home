import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import LinkTree from "@assets/link_tree.svg";

export default function Hamingway() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleButtonClick = () => {
        window.open("https://linktr.ee/_hamingway", "_blank");
    };

    if (isMobile) {
        return (
            <Box>
                <Box
                    height={225}
                    sx={{
                        backgroundImage: "url('/img/port_img/port_way_bg.png')",
                        backgroundSize: "cover",
                    }}
                >
                    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} alignItems={"center"}>
                        <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"flex-end"}>
                            <img src={"/img/character_way.png"} alt={`image`} style={{ width: "100%" }} />
                        </Box>
                    </Box>
                </Box>
                <Box height={"auto"} bgcolor={"#FFE7B3"} py={3}>
                    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} alignItems={"center"}>
                        <Box display={"flex"} width={"auto"} flexDirection={"column"} alignItems={"center"} gap={2}>
                            <Box>
                                <Typography fontSize={24}>{"햄밍웨이"}</Typography>
                            </Box>
                            <Box>
                                <Typography fontSize={16} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"} textAlign={"center"}>
                                    {"나, 햄밍웨이 1.3세, 70구람!🐹\n눈물 한 방울 💧 흘려 본 적 없는 싸나이!"}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography fontSize={14} fontWeight={200} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                                    {"멋진 선장이 되고픈 햄밍웨이와\n햄스터 마을 친구들의 아기자기한 일상"}
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
                className="boxWithDiagonalShadow"
                sx={{
                    height: { sm: 267, md: 400, lg: 529 },
                    background: `linear-gradient(-104deg, #FFE7B3 44%, rgba(255, 255, 255, 0) 44%), url('/img/port_img/port_way_bg.png')`,
                    //background: "linear-gradient(-110deg, #FFE7B3 50%, #BFA177 50%)",
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
                    <Box display={"flex"} width={"50%"} height={"100%"} alignItems={"flex-end"} pl={8}>
                        <img src={"/img/character_way.png"} alt={`image`} style={{ width: "100%", paddingBottom: "27px" }} />
                    </Box>
                    <Box
                        display={"flex"}
                        width={"auto"}
                        flexDirection={"column"}
                        gap={2}
                        mt={3.75}
                        sx={{ pl: { sm: "10%", mm: "12%", md: "16%", lg: "18%" } }}
                    >
                        <Box>
                            <Typography sx={{ fontSize: { sm: 21, mm: 23, md: 28, lg: 32 } }}>{"햄밍웨이"}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: { sm: 16, mm: 17, md: 20, lg: 24 } }} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                                {"나, 햄밍웨이 1.3세, 70구람!\n눈물 한 방울 💧 흘려 본 적 없는\n 싸나이!"}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{ fontSize: { sm: 12, md: 14, lg: 16 } }}
                                fontWeight={200}
                                fontFamily={"Pretendard"}
                                whiteSpace={"pre-wrap"}
                            >
                                {"멋진 선장이 되고픈 햄밍웨이와\n햄스터 마을 친구들의 아기자기한 일상"}
                            </Typography>
                        </Box>
                        <Box display={"flex"} justifyContent={"flex-end"} width={"100%"} mt={3}>
                            <Button startIcon={<LinkTree />} onClick={handleButtonClick} sx={{ textTransform: "none" }}>
                                <Typography fontFamily={"Pretendard"} fontSize={12} fontWeight={500} color={"#000"}>
                                    {"Linktree"}
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}
