import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import VectorIcon from "@assets/mdi_vector-line.svg";
import { ReactElement, useEffect, useRef, useState } from "react";

interface KeywordBoxProps {
    keyword: string;
    hover_keyword: string;
    sub_keyword: string;
    icon: ReactElement;
}

export default function MobileBox(props: KeywordBoxProps) {
    const boxRef = useRef(null);
    const [boxWidth, setBoxWidth] = useState(0);

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    let iconSize = isLg ? 72 : isMd ? (isMobile ? 48 : 58.8) : 62;
    let keywordFont = isLg ? 32 : isMd ? (isMobile ? 18 : 24) : 16;

    let subKeywordFont = isLg ? 18 : isMd ? (isMobile ? 14 : 16) : 16;

    let boxSize = isLg ? "400px" : isMd ? (isMobile ? "230px" : "360px") : "300px";
    let textOffSet = isLg ? 40 : isMd ? (isMobile ? -15 : 34) : 20;
    let iconOffSet = isLg ? 150 : isMd ? (isMobile ? 80 : 130) : 110;

    let leftOffSet = isMobile ? 30 : 50;

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

    return (
        <Box
            ref={boxRef}
            width={boxSize}
            height={isMobile ? "230px" : boxSize}
            borderRadius={5}
            sx={{
                backgroundSize: "cover",
                backgroundColor: "#133F7F",
                position: "relative",
                transition: "background-color 1s ease",
                boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.25)",
            }}
        >
            <Box
                className="icon"
                position={"absolute"}
                top={"45%"}
                left={"50%"}
                sx={{
                    transform: `translate(calc(-${boxWidth / 1.9}px + ${leftOffSet}px), -${iconOffSet}px) scale(0.8)`,
                    width: iconSize,
                    height: iconSize,
                    transition: "transform 0.5s ease-out",
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
                    transform: `translate(calc(-${boxWidth / 2}px + ${leftOffSet}px), ${textOffSet}px)`,
                    transition: "transform 0.5s ease-out",
                }}
            >
                <Typography
                    className="text_typo"
                    sx={{
                        transition: "font-weight 0.5s ease-out, font-size 0.5s ease-out",
                        fontWeight: 900,
                        fontSize: keywordFont,
                        textAlign: "left",
                        color: "#fff",
                    }}
                >
                    {props.hover_keyword}
                </Typography>
            </Box>
            <Box className="opacity_box" position={"absolute"} bottom={"15%"} left={leftOffSet}>
                {/* 모바일 14 */}
                <Typography fontFamily={"Pretendard"} fontSize={subKeywordFont} color={"#fff"}>
                    {props.sub_keyword}
                </Typography>
            </Box>
        </Box>
    );
}
