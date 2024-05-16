import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ArrowIcon from "@assets/arrow.svg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const portfolioItem = ["/img/main_prot/complex.png", "/img/main_prot/ssong.png", "/img/hamingway.png"];

export default function PortfolioSection() {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const [slideHeight, setSlideHeight] = useState("36.3vh");
    const [slideMinHeight, setSliderMinHeight] = useState(50);

    let keywordFont = isDesktop ? 22 : isTablet ? (isMobile ? 14 : 12) : 16;

    useEffect(() => {
        if (isMobile) {
            setSliderMinHeight(20);
            setSlideHeight("30vh");
        } else if (isTablet) {
            setSliderMinHeight(30);
            setSlideHeight("40vh");
        } else if (isDesktop) {
            setSliderMinHeight(40);
            setSlideHeight("36.3vh");
        }
    }, [isMobile, isTablet, isDesktop]);

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            height={"100%"}
            id={"portfolio"}
        >
            <Carousel
                width={"100%"}
                showArrows={true}
                centerMode={true}
                centerSlidePercentage={50}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                autoFocus={true}
                autoPlay={false}
                infiniteLoop={true}
                renderArrowPrev={(clickHandler, hasPrev) => {
                    return (
                        <IconButton
                            onClick={clickHandler}
                            sx={{ border: "1px solid", color: "#000", transform: "translate(-50%, -50%)" }}
                            style={{ position: "absolute", left: isMobile ? "10%" : "45%", top: "110%" }}
                        >
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                    );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        <IconButton
                            onClick={clickHandler}
                            sx={{ border: "1px solid", color: "#000", transform: "translate(-50%, -50%)" }}
                            style={{ position: "absolute", right: isMobile ? "10%" : "45%", top: "110%" }}
                        >
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    );
                }}
            >
                {portfolioItem.map((item, idx) => (
                    <Box
                        width={"100%"}
                        height={"100%"}
                        key={`${portfolioItem}_${idx}`}
                        borderRadius={9}
                        sx={{ backgroundImage: `url(${item})`, backgroundSize: "cover" }}
                    />
                ))}
            </Carousel>
            <Box position={"absolute"} bottom={"-190%"} right={"17%"}>
                <Button
                    onClick={() => router.push("/portfolio")}
                    endIcon={<ArrowIcon sx={{ color: "#fff" }} />}
                    sx={{
                        px: "13px",
                        py: "9px",
                        background: "#000",
                        borderRadius: 4,
                        textTransform: "none",
                        "&:hover": {
                            background: "#000",
                        },
                    }}
                >
                    <Typography fontFamily={"Pretendard"} fontSize={13.44} fontWeight={500} color={"#fff"}>
                        {"View More"}
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}
