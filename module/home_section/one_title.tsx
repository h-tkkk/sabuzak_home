import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

const mainAnimationText = ["재미를", "행복을", "감동을", "웃음을"];
const subTitle = ["다양한 즐거움을 드리기 위해", "더 많이 고민합니다.", "다양한 시도를 통해", "더 많은 웃음을 만들어 갑니다."];

export default function OneTitle() {
    const [word, setWord] = useState(mainAnimationText[0]);
    const [entering, setEntering] = useState(true);

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    // let mainTitleFont = isLg ? 48 : isMd ? 24 : 36;
    let mainTitleFont = isLg ? 48 : isMd ? (isMobile ? 18 : 24) : 36;
    let subTitleFont = isLg ? 24 : isMd ? (isMobile ? 12 : 14) : 18;
    let wordFont = isLg ? 60 : isMd ? 36 : 48;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setEntering(false);
            setTimeout(() => {
                setWord((prev) => {
                    const currentIndex = mainAnimationText.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % mainAnimationText.length;
                    return mainAnimationText[nextIndex];
                });
                setEntering(true);
            }, 500);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Fragment>
            <Box display={"flex"} alignItems={"center"} gap={5}>
                <Box>
                    <Typography fontWeight={700} color={"#fff"} fontSize={mainTitleFont}>
                        {"사부작은 "}
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        fontWeight={900}
                        color={"#fff"}
                        fontSize={wordFont}
                        sx={{
                            animation: entering ? "fadeMoveDown 1s forwards" : "fadeMoveUp 1s forwards",
                        }}
                    >
                        {word}
                    </Typography>
                </Box>
                <Box>
                    <Typography fontWeight={700} color={"#fff"} fontSize={mainTitleFont}>
                        {" 만듭니다."}
                    </Typography>
                </Box>
            </Box>
            <Box pt={3}>
                {subTitle.map((sub, idx) => {
                    return (
                        <Box key={`sub_${idx}`}>
                            <Typography color={"#fff"} fontWeight={300} fontSize={subTitleFont}>
                                {sub}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>
        </Fragment>
    );
}
