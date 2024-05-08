import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import OneTitle from "./one_title";
import TwoTitle from "./two_title";
import NumberButtons from "./number_buttons";

export default function HomeSection() {
    const [titleSelect, setTitleSelect] = useState<number>(1);
    const [entering, setEntering] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setEntering(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, [titleSelect]);

    const handleTitleChange = (num: number) => {
        setEntering(false);
        setTimeout(() => {
            setTitleSelect(num);
        }, 500);
    };

    return (
        <Box position={"relative"} overflow={"hidden"} width={"100%"} height={"100%"}>
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
            <Box display={"flex"} flexDirection={"column"} position="absolute" bottom={160} left={160} p={2} zIndex={2} gap={1}>
                <Box
                    sx={{
                        opacity: entering ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                    }}
                >
                    {titleSelect == 1 ? <OneTitle /> : <TwoTitle />}
                </Box>
                <NumberButtons onClick={handleTitleChange} selectNum={titleSelect} />
            </Box>
        </Box>
    );
}
