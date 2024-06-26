import { Box, Button, IconButton, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import LinkTree from "@assets/link_tree.svg";
import { useState } from "react";
import ArrowIcon from "@assets/jalnan_arrow.svg";
import Link from "next/link";

const title = "꾀죄죄한 작은 숲";
const mainContent = "우리 근처에 있지만,\n우리는 눈치채지 못하는\n작고 꾀죄죄한 곳";
const subContent =
    "털복숭이 숲요정 '그로비'들과\n해발고도 4cm,\n세상에서 가장 작은 산 '마운틴 옹'\n그리고 조금은 특별한 색채를 가진\n숲속 친구들의 이야기";
const color = "#CDEDA3";

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

export default function Forest() {
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
                        backgroundImage: "url('/img/portfoilo_page/portfolio_sleathygroves.png')",
                        backgroundSize: "cover",
                    }}
                >
                    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} alignItems={"center"}>
                        <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"flex-end"} />
                    </Box>
                </Box>
                <Box height={"auto"} bgcolor={color} py={3}>
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
                                {"더보기"}
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        );
    } else {
        // portfolio_sleathygroves.png
        return (
            <HoverBox
                className={isHovered ? "" : "boxWithDiagonalShadow"}
                sx={{
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
                    src="/img/portfoilo_page/portfolio_sleathygroves.png"
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
                    <Link href={"sleathygroves"} passHref>
                        <Box component="a" sx={{ display: "flex", alignItems: "center", textDecration: "none", color: "inherit" }}>
                            <Typography sx={{ fontSize: 40, color: "#000" }}>{"꾀죄죄한 작은 숲 페이지 "}</Typography>
                            <ArrowIcon />
                        </Box>
                    </Link>
                </Overlay>
            </HoverBox>
        );
    }
}
