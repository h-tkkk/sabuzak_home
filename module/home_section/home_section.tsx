import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import NumberButtons from "./number_buttons";
import { list } from "@vercel/blob";

const OneTitle = React.lazy(() => import("./one_title"));
const TwoTitle = React.lazy(() => import("./two_title"));

export default function HomeSection() {
    const [titleSelect, setTitleSelect] = useState<number>(1);
    const [entering, setEntering] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        <Box position={"relative"} overflow={"hidden"} width={"100%"} height={"100%"} id="home">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
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
            <Box
                display={"flex"}
                flexDirection={"column"}
                position="absolute"
                bottom={isMobile ? "5%" : "8%"}
                left={isMobile ? "5%" : "18%"}
                zIndex={2}
            >
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

function VideoComponent({ fileName }) {
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {
        const fetchVideo = async () => {
            const response = await fetch("/api/video");
            const data = await response.json();
            if (response.ok) {
                setVideoUrl(data.url);
            } else {
                console.error("Failed to load video:", data.error);
            }
        };

        fetchVideo();
    }, []);

    if (!videoUrl) return <Typography>Loading video...</Typography>;

    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
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
            <source src={videoUrl} type="video/mp4" />
        </video>
    );
}
