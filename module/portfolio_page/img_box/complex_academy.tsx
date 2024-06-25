import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import ArrowIcon from "@assets/jalnan_arrow.svg";
import { useState } from "react";

const title = "콤플렉스 아카데미";
const mainContent = "콤플렉스를 극복하지 않아도\n있는 그래도의 내가 행복이다";
const subContent = "라미와 친구들의 우당탕탕 마법 학교 일상과\n성장기 고민, 우정 그리고 치유에 대한 이야기";
const color = "#FFE676";

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

export default function ComplexAcademy() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [isHovered, setIsHovered] = useState(false);

    if (isMobile) {
        return (
            <Box>
                <Box
                    height={225}
                    sx={{
                        backgroundImage: "url('/img/portfoilo_page/portfoilo_complex.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "bottom",
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
                </Box>
            </Box>
        );
    } else {
        return (
            <HoverBox
                className={isHovered ? "" : "boxWithDiagonalShadow_2"}
                sx={{
                    position: "relative",
                    height: { sm: 267, md: 400, lg: 529 },
                    background: `linear-gradient(-76deg, ${color} 46%, rgba(255, 255, 255, 0) 46%)`,
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
                            <Typography sx={{ fontSize: 40, color: "#000" }}>{"콤플렉스 아카데미 페이지 "}</Typography>
                            <ArrowIcon />
                        </Box>
                    </Link>
                </Overlay>
            </HoverBox>
        );
    }
}
