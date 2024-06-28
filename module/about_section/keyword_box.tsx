import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import VectorIcon from "@assets/mdi_vector-line.svg";
import { ReactElement, useEffect, useRef, useState } from "react";

interface KeywordBoxProps {
    keyword: string;
    hover_keyword: string;
    sub_keyword: string;
    videoSrc: string;
    icon: ReactElement;
}

export default function KeywordBox(props: KeywordBoxProps) {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const [boxWidth, setBoxWidth] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    let iconSize = isLg ? 72 : isMd ? (isMobile ? 62 : 62) : 62;
    let keywordFont = isLg ? 32 : isMd ? (isMobile ? 14 : 12) : 16;
    let boxSize = isLg ? "400px" : isMd ? (isMobile ? "100%" : "350px") : "300px";
    let textOffSet = isLg ? 40 : isMd ? (isMobile ? -30 : 30) : 20;
    let iconOffSet = isLg ? 150 : isMd ? (isMobile ? 60 : 130) : 110;

    useEffect(() => {
        function handleResize() {
            if (boxRef.current) {
                setBoxWidth(boxRef.current.offsetWidth);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize(); // 초기 렌더링 시에도 크기를 계산

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Box
            ref={boxRef}
            width={boxSize}
            height={isMobile ? "160px" : boxSize}
            borderRadius={5}
            sx={{
                backgroundSize: "cover",
                backgroundColor: "#86B6FB",
                position: "relative",
                transition: "background-color 1s ease",
                boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.25)",
                "&:hover": {
                    backgroundColor: "#133F7F",
                    "& .icon": {
                        transform: `translate(calc(-${boxWidth / 1.9}px + 50px), -${iconOffSet}px) scale(0.8)`,
                        transition: "transform 0.5s ease-out",
                        width: 0,
                    },
                    "& .text": {
                        transform: `translate(calc(-${boxWidth / 2}px + 50px), ${textOffSet}px)`,
                        transition: "transform 0.5s ease-out",
                    },
                    "& .text_typo": {
                        transition: "font-weight 0.5s ease-out, font-size 0.5s ease-out, color 1s ease",
                        fontWeight: 900,
                        color: "#000",
                        fontSize: 26,
                    },
                    "& .opacity_box": {
                        opacity: 1,
                        transition: "opacity 0.5s ease-out",
                    },
                    "& .hover_video": {
                        opacity: 1,
                        transition: "opacity 0.5s ease-out",
                    },
                },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Box
                className="hover_video"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    pointerEvents: "none",
                    transition: "opacity 0.5s ease-out",
                }}
            >
                <video
                    src={props.videoSrc}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "16px",
                    }}
                    autoPlay
                    loop
                    muted
                />
            </Box>
            <Box
                className="icon"
                position={"absolute"}
                top={"45%"}
                left={"50%"}
                sx={{
                    transform: "translate(-50%, -50%)",
                    width: iconSize,
                    height: iconSize,
                    transition: "transform 0.5s ease-out",
                    fill: "#000",
                    "& .svg": {
                        width: iconSize,
                        height: iconSize,
                    },
                }}
            >
                {props.icon}
            </Box>
            <Box
                className="text"
                position={"absolute"}
                top={isMobile ? "71.5%" : "61.5%"}
                left={"50%"}
                sx={{
                    transform: "translate(-50%, -50%)",
                    transition: "transform 0.5s ease-out",
                }}
            >
                <Typography
                    className="text_typo"
                    sx={{
                        transition: "font-weight 0.5s ease-out, font-size 0.5s ease-out, color 1s ease",
                        fontSize: keywordFont,
                        textAlign: "left",
                        color: "#fff",
                    }}
                >
                    {isHovered ? props.hover_keyword : props.keyword}
                </Typography>
            </Box>
            <Box
                className="opacity_box"
                position={"absolute"}
                bottom={"15%"}
                left={50}
                sx={{
                    transition: "opacity 0.5s ease-out",
                    opacity: 0,
                }}
            >
                <Typography fontFamily={"Pretendard"} fontSize={18} color={"#000"}>
                    {props.sub_keyword}
                </Typography>
            </Box>
        </Box>
    );
}
