import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import LinkTree from "@assets/link_tree.svg";
import { useState } from "react";
import { styled } from "@mui/system";
import ArrowIcon from "@assets/jalnan_arrow.svg";
import Link from "next/link";

const title = "햄밍웨이";
const mainContent = "나, 햄밍웨이 1.3세, 70구람!\n눈물 한 방울 💧 흘려 본 적 없는\n싸나이!";
const subContent = "멋진 선장이 되고픈 가출 햄스터 햄밍웨이와\n햄스터 마을 친구들의 아기자기한 리얼 라이프";
const color = "#FFE7B3";
const imgPath = "/img/portfoilo_page/portfolio_haming.jpg";

const HoverBox = styled(Box)({
    position: "relative",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    transition: "background-color 0.3s ease",
    "&:hover": {
        backgroundColor: color,
        "& .content": {
            opacity: 0,
            transition: "opacity 0.3s ease",
        },
        "& .overlay": {
            opacity: 1,
            transition: "opacity 0.3s ease",
            pointerEvents: "all",
        },
    },
});

const Overlay = styled(Box)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    transition: "opacity 0.3s ease",
    zIndex: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
});

export default function Hamingway() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [isHovered, setIsHovered] = useState(false);

    const handleButtonClick = () => {
        window.open("https://linktr.ee/_hamingway", "_blank");
    };

    if (isMobile) {
        return (
            <Box>
                <Box
                    height={225}
                    sx={{
                        backgroundImage: `url(${imgPath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "bottom",
                    }}
                >
                    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} alignItems={"center"}>
                        <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"flex-end"}>
                            {/* <img src={"/img/character_way.png"} alt={`image`} style={{ width: "100%" }} /> */}
                        </Box>
                    </Box>
                </Box>
                <Box height={"auto"} bgcolor={"#FFE7B3"} py={3}>
                    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} alignItems={"center"}>
                        <Box display={"flex"} width={"auto"} flexDirection={"column"} alignItems={"center"} gap={2}>
                            <Box>
                                <Typography fontSize={24}>{title}</Typography>
                            </Box>
                            <Box>
                                <Typography fontSize={16} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"} textAlign={"center"}>
                                    {mainContent}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography fontSize={14} fontWeight={200} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"} textAlign={"center"}>
                                    {subContent}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"flex-end"} width={"100%"} mt={3} pr={2}>
                        <Button startIcon={<LinkTree />} onClick={handleButtonClick} sx={{ textTransform: "none" }}>
                            <Typography fontFamily={"Pretendard"} fontSize={12} fontWeight={500} color={"#000"}>
                                {"Linktree"}
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        );
    } else {
        return (
            <HoverBox
                className={isHovered ? "" : "boxWithDiagonalShadow"}
                sx={{
                    position: "relative",
                    height: { sm: 267, md: 400, lg: 529 },
                    background: `linear-gradient(-104deg, ${color} 44%, rgba(255, 255, 255, 0) 44%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                    fontSize: "24px",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Box
                    component="img"
                    src={imgPath}
                    alt="background image"
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "60%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "bottom",
                        zIndex: -1,
                    }}
                />
                <Box display="flex" width="100%" height="100%" alignItems="center" className="content">
                    <Box display="flex" width="50%" height="100%" alignItems="flex-end" />
                    <Box display="flex" width="auto" flexDirection="column" gap={2} sx={{ pl: { sm: "10%", mm: "12%", md: "16%", lg: "18%" } }}>
                        <Box>
                            <Typography sx={{ fontSize: { sm: 21, mm: 23, md: 28, lg: 32 } }}>{title}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: { sm: 16, mm: 17, md: 20, lg: 24 } }} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                                {mainContent}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{ fontSize: { sm: 12, md: 14, lg: 16 } }}
                                fontWeight={200}
                                fontFamily={"Pretendard"}
                                whiteSpace={"pre-wrap"}
                            >
                                {subContent}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Overlay className="overlay">
                    <Link href={"/"} passHref>
                        <Box component="a" sx={{ display: "flex", alignItems: "center", textDecration: "none", color: "inherit" }}>
                            <Typography sx={{ fontSize: 40, color: "#000" }}>{`${title} 페이지 `}</Typography>
                            <ArrowIcon />
                        </Box>
                    </Link>
                </Overlay>
            </HoverBox>
        );
    }
}
