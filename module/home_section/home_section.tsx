import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import NumberButtons from "./number_buttons";
import { useRootStores } from "../../rootStore/rootStore";
import { observer } from "mobx-react";
import OneTitle from "./one_title";
import TwoTitle from "./two_title";
import MainVideo from "./main_video";
import MainText from "./main_text";

const HomeSection = observer(() => {
    const rootStore = useRootStores();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        const timeout = setTimeout(() => {
            rootStore.setEntering(true);
        });

        return () => clearTimeout(timeout);
    }, [rootStore, rootStore.homeMainNum]);

    return (
        <Box
            position={"relative"}
            overflow={"hidden"}
            width={"100%"}
            height={"100%"}
            id="home"
            sx={{ backgroundColor: rootStore.homeMainNum == 1 ? "rgba(0, 0, 0, 0.25)" : "#133F7F" }}
        >
            {rootStore.homeMainNum == 1 ? <MainVideo /> : <MainText />}
            <Box
                display={"flex"}
                flexDirection={"column"}
                position="absolute"
                bottom={isMobile ? "5%" : "16%"}
                left={isMobile ? "5%" : "18%"}
                zIndex={2}
            >
                <Box
                    sx={{
                        opacity: rootStore.entering ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                    }}
                >
                    {rootStore.homeMainNum == 1 ? <OneTitle /> : <TwoTitle />}
                </Box>
                <NumberButtons />
            </Box>
        </Box>
    );
});

export default HomeSection;

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
