import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import VectorIcon from "@assets/mdi_vector-line.svg";
import { useEffect, useRef, useState } from "react";

interface KeywordBoxProps {
    imgUrl: string;
    keyword: string;
}

export default function KeywordBox(props: KeywordBoxProps) {
    const boxRef = useRef(null);
    const [boxWidth, setBoxWidth] = useState(0);

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    let iconSize = isLg ? 60 : isMd ? (isMobile ? 60 : 80) : 100;
    let keywordFont = isLg ? 22 : isMd ? (isMobile ? 16 : 18) : 20;

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
            width={400}
            height={400}
            borderRadius={5}
            sx={{
                // backgroundImage: `url(${props.imgUrl})`,
                backgroundSize: "cover",
                backgroundColor: "#000",
                position: "relative",
                transition: "background-color 1s ease",
                boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.25)",
                "&:hover": {
                    backgroundColor: "#133F7F",
                    "& .icon": {
                        transform: `translate(calc(10% - ${boxWidth * 0.4}px), -220%) scale(0.8)`,
                        transition: "transform 0.5s ease-out",
                    },
                    "& .text": {
                        transform: `translate(calc(5% - ${boxWidth * 0.39}px), 100%)`,
                        transition: "transform 0.5s ease-out",
                    },
                    "& .text_typo": {
                        transition: "font-weight 0.5s ease-out, font-size 0.5s ease-out",
                        fontWeight: 900,
                        fontSize: 22,
                    },
                    "& .opacity_box": {
                        opacity: 1,
                        transition: "opacity 0.5s ease-out",
                    },
                },
            }}
        >
            <Box
                className="icon"
                position={"absolute"}
                top={"40%"}
                left={"50%"}
                sx={{
                    transform: "translate(-50%, -50%)",
                    width: iconSize,
                    height: iconSize,
                    transition: "transform 0.5s ease-out",
                }}
            >
                <VectorIcon fill={"#fff"} sx={{ width: 1, height: 1 }} />
            </Box>
            <Box
                className="text"
                position={"absolute"}
                top={"60%"}
                left={"50%"}
                sx={{
                    transform: "translate(-50%, -50%)",
                    transition: "transform 0.5s ease-out",
                }}
            >
                <Typography
                    className="text_typo"
                    sx={{
                        transition: "font-weight 0.5s ease-out, font-size 0.5s ease-out",
                        fontSize: keywordFont,
                        textAlign: "left",
                        color: "#fff",
                    }}
                >
                    {props.keyword}
                </Typography>
            </Box>
            <Box
                className="opacity_box"
                position={"absolute"}
                bottom={60}
                left={50}
                sx={{
                    transition: "opacity 0.5s ease-out",
                    opacity: 0,
                }}
            >
                <Typography fontFamily={"Pretendard"} fontSize={16} color={"#fff"}>
                    {"키워드에 관한 내용"}
                </Typography>
                <Typography fontFamily={"Pretendard"} fontSize={16} color={"#fff"}>
                    {"한줄 두줄~"}
                </Typography>
            </Box>
        </Box>
    );
}
