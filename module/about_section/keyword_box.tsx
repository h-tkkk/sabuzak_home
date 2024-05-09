import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
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
    const isLg = useMediaQuery(theme.breakpoints.down("lg"));

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
            width={"100%"}
            height={"50%"}
            borderRadius={4}
            sx={{
                // backgroundImage: `url(${props.imgUrl})`,
                backgroundSize: "cover",
                backgroundColor: "#000",
                position: "relative",
                transition: "background-color 1s ease",
                boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.25)",
                "&:hover": {
                    backgroundColor: "blue",
                    "& .icon": {
                        transform: `translate(calc(10% - ${boxWidth * 0.5}px), -130%) scale(0.8)`,
                        transition: "transform 0.5s ease-out",
                    },
                    "& .text": {
                        transform: `translate(calc(10% - ${boxWidth * 0.42}px), -130%) scale(1.2)`,
                        transition: "transform 0.5s ease-out",
                    },
                    "& .text_typo": {
                        transition: "font-weight 0.5s ease-out, font-size 0.5s ease-out",
                        fontWeight: 900,
                        fontSize: "2em",
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
                    width: 120,
                    height: 120,
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
                        fontSize: "1.5em",
                        fontWeight: 700,
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
                bottom={30}
                left={30}
                sx={{
                    transition: "opacity 0.5s ease-out",
                    opacity: 0,
                }}
            >
                <Typography fontSize={30} color={"#fff"}>
                    {"키워드에 관한 내용"}
                </Typography>
                <Typography fontSize={30} color={"#fff"}>
                    {"한줄 두줄~"}
                </Typography>
            </Box>
        </Box>
    );
}
