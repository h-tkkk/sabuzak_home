import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ArrowIcon from "@assets/arrow.svg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const portfolioItem = ["complex.png", "ssong.png", "haming.png"];

export default function PortfolioSection() {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const [selectedItem, setSelectedItem] = useState(0);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            height={"100%"}
            id={"portfolio"}
            position={"relative"}
        >
            <Carousel
                width={"100%"}
                showArrows={true}
                centerMode={true}
                centerSlidePercentage={isMobile ? 80 : 50}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                autoFocus={true}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={selectedItem}
                onChange={(index) => setSelectedItem(index)}
                renderArrowPrev={(clickHandler, hasPrev) => {
                    if (isDesktop) {
                        return (
                            <IconButton
                                onClick={clickHandler}
                                sx={{ border: "1px solid", color: "#000", transform: "translate(-40%, -40%)" }}
                                style={{ position: "absolute", left: isMobile ? "40%" : "40%", top: isMobile ? "100%" : "110%" }}
                            >
                                <KeyboardArrowLeftIcon />
                            </IconButton>
                        );
                    } else {
                        return null;
                    }
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                    if (isDesktop) {
                        return (
                            <IconButton
                                onClick={clickHandler}
                                sx={{ border: "1px solid", color: "#000", transform: "translate(-40%, -40%)" }}
                                style={{ position: "absolute", right: isMobile ? "30%" : "40%", top: isMobile ? "100%" : "110%" }}
                            >
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        );
                    } else {
                        return null;
                    }
                }}
            >
                {portfolioItem.map((item, idx) => (
                    <Box
                        key={`${portfolioItem}_${idx}`}
                        borderRadius={9}
                        sx={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(/img/main_prot/${isTablet ? `tab_${item}` : item})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                        }}
                        onClick={() => handleItemClick(idx)}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: selectedItem === idx ? "transparent" : "rgba(0, 0, 0, 0.5)",
                                borderRadius: "inherit",
                                transition: "background-color 0.5s ease, transform 0.5s ease",
                            }}
                        />
                    </Box>
                ))}
            </Carousel>
            <Box position={"absolute"} bottom={"5%"} right={isMobile ? "none" : "17%"}>
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
