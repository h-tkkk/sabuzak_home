import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const mainAnimationText = ["재미를", "행복을", "감동을", "웃음을"];
const subTitle = ["다양한 즐거움을 드리기 위해", "더 많이 고민합니다.", "다양한 시도를 통해", "더 많은 웃음을 만들어 갑니다."];

export default function HomeSection() {
    const [word, setWord] = useState(mainAnimationText[0]);
    const [entering, setEntering] = useState(true);

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
        <Box position={"relative"} overflow={"hidden"} width={"100%"} height={"100%"} zIndex={-2}>
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                    outline: "none",
                    border: "none",
                }}
            >
                <source src="/video/main_video.mp4" type="video/mp4" />
            </video>
            <Box display={"flex"} flexDirection={"column"} position="absolute" bottom={160} left={160} p={2} zIndex={2}>
                <Box display={"flex"} alignItems={"center"}>
                    <Typography fontWeight={700} color={"#fff"} fontSize={60}>
                        {"사부작은 "}
                    </Typography>
                    <Box px={5}>
                        <Typography
                            fontWeight={900}
                            color={"#fff"}
                            fontSize={72}
                            sx={{
                                transition: "opacity 1s, transform 1s",
                                opacity: entering ? 1 : 0,
                                transform: `translateY(${entering ? 0 : -100}%)`,
                            }}
                        >
                            {word}
                        </Typography>
                    </Box>
                    <Typography fontWeight={700} color={"#fff"} fontSize={60}>
                        {" 만듭니다."}
                    </Typography>
                </Box>
                <Box pt={3}>
                    {subTitle.map((sub, idx) => {
                        return (
                            <Box key={`sub_${idx}`}>
                                <Typography color={"#fff"} fontSize={24}>
                                    {sub}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
}
