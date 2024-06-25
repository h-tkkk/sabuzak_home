import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import InstarIcon from "@assets/mdi_instagram.svg";
import ArrowIcon from "@assets/jalnan_arrow.svg";
import { useState } from "react";
import { styled } from "@mui/system";
import Link from "next/link";

const title = "쑝쑝 매거진";
const mainContent = "겁많은 홀랭, 충격반전 개꿀쓰,\n못말리는 올이\n그리고 그놈은 쓉 양아치-\n기타 등등.. 그들이 모였다!";
const subContent = "그 시절.. 그 감성.. 그 만화..\n그리고 얼렁뚱땅 한 방울;;;\n새롭고 개성 넘치는 말장난\n코믹-쑝쑝 매거진";
const color = "#D2EFFF";
const imgPath = "/img/portfoilo_page/portfolio_ssyong.png";

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

export default function SsyongMargazine() {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [isHovered, setIsHovered] = useState(false);

    const handleButtonClick = () => {
        window.open("https://www.instagram.com/ssyong.ssyong_magazine/", "_blank");
    };

    if (isMobile) {
        return (
            <Box>
                <Box
                    height={225}
                    sx={{
                        backgroundImage: `url(${imgPath})`,
                        backgroundSize: "cover",
                    }}
                >
                    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} alignItems={"center"}>
                        <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"flex-end"}>
                            {/* <img src={"/img/character_ssong.png"} alt={`image`} style={{ width: "100%", height: "inherit", objectFit: "contain" }} /> */}
                        </Box>
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
                        <Box display={"flex"} justifyContent={"flex-end"} width={"100%"} mt={isMd ? 0 : 1.75} pr={2}>
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
    } else {
        return (
            <HoverBox
                className={isHovered ? "" : "boxWithDiagonalShadow_2"}
                sx={{
                    position: "relative",
                    height: { sm: 267, md: 400, lg: 529 },
                    background: `linear-gradient(-76deg, #D2EFFF 46%, rgba(255, 255, 255, 0) 46%)`,
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
                    src="/img/portfoilo_page/portfolio_ssyong.png"
                    alt="background image"
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "58.39%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        zIndex: -1,
                    }}
                />
                <Box display="flex" width="100%" height="100%" alignItems="center" className="content">
                    <Box display="flex" width="50%" height="100%" alignItems="flex-end" />
                    <Box display="flex" width="auto" flexDirection="column" gap={2} sx={{ pl: { sm: "10%", mm: "12%", md: "16%", lg: "18%" } }}>
                        <Box>
                            <Typography sx={{ fontSize: { sm: 21, mm: 23, md: 28, lg: 32 } }}>{"쑝쑝 매거진"}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: { sm: 16, mm: 17, md: 20, lg: 24 } }} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                                {"겁많은 홀랭, 충격반전 개꿀쓰,\n못말리는 올이\n그리고 그놈은 쓉 양아치-\n기타 등등.. 그들이 모였다!"}
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
                    </Box>
                </Box>
                <Overlay className="overlay">
                    <Link href={"/"} passHref>
                        <Box component="a" sx={{ display: "flex", alignItems: "center", textDecration: "none", color: "inherit" }}>
                            <Typography sx={{ fontSize: 40, color: "#000" }}>{`${title} 페이지`}</Typography>
                            <ArrowIcon />
                        </Box>
                    </Link>
                </Overlay>
            </HoverBox>
        );
    }
}
