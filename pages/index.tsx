import { Box, Fab, Zoom, useMediaQuery, useTheme } from "@mui/material";
import Header from "../composition/header/header";
import Footer from "../composition/footer/footer";
import ContextUs from "../module/context_us";
import HomeSection from "../module/home_section/home_section";
import ArrowNavigation from "../component/arrow_navigation";
import AboutSection from "../module/about_section/about_section";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { theme } from "../src/theme";
import PortfolioSection from "../module/portfolio_section/portfolio_section";
import CenterSwiper from "../module/portfolio_section/center_swiper";
import Head from "next/head";

export default function Home() {
    const [showFloatingButton, setShowFloatingButton] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        const checkScroll = () => {
            const homeElement = document.getElementById("home");
            if (homeElement) {
                const rect = homeElement.getBoundingClientRect();
                const isHalfScrolled = rect.top <= -rect.height / 2;
                setShowFloatingButton(isHalfScrolled);
            }
        };

        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const handleHomeSectionMove = () => {
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <head>
                <title>Sabuzak Studio</title>
                <meta name="google-site-verification" content="MF1bKjXjgvrg6RgHOipe-DdlbnnTYZqVUKmDBZdVKeA" />
                <meta name="naver-site-verification" content="e28872b5016b420276e8606e6b59d8d4eb700b32" />

                {/* Open Graph meta tags */}
                <meta property="og:title" content="Sabuzakx2 studio" />
                <meta property="og:description" content="Sabuzakx2 studio" />
                <meta property="og:image" content="https://www.sbzsbz.com/path/to/your/image.jpg" />
                <link rel="canonical" href="https://www.sbzsbz.com" />
            </head>
            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} position={"relative"}>
                <Header />
                {/* Content */}
                <Box width={"100%"} height={"100%"}>
                    <HomeSection />
                    <AboutSection />
                    {isMobile ? <CenterSwiper /> : <PortfolioSection />}
                    <ContextUs />
                    <Footer />
                </Box>
                {/* Array Navigation */}
                <ArrowNavigation />
                <Zoom
                    in={showFloatingButton}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${showFloatingButton ? transitionDuration.exit : 0}ms`,
                        backgroundColor: "#133F7F",
                    }}
                    unmountOnExit
                >
                    <Fab color="primary" aria-label="add" style={{ position: "fixed", right: 20, bottom: 20 }} onClick={handleHomeSectionMove}>
                        <ArrowUpwardIcon />
                    </Fab>
                </Zoom>
            </Box>
        </>
    );
}
