import { Box, Fab, Zoom } from "@mui/material";
import Header from "../composition/header/header";
import Footer from "../composition/footer/footer";
import ContextUs from "../module/context_us";
import Testing from "../module/testing";
import HomeSection from "../module/home_section/home_section";
import ArrowNavigation from "../component/arrow_navigation";
import AboutSection from "../module/about_section/about_section";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { theme } from "../src/theme";
import PortfolioSection from "../module/portfolio_section/portfolio_section";

export default function Home() {
    const [showFloatingButton, setShowFloatingButton] = useState(false);

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
        <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Header />
            {/* Content */}
            <Box width={"100%"} height={"100%"}>
                <HomeSection />
                <AboutSection />
                <PortfolioSection />
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
    );
}

// 포트폴리오 애니메이션 최적화 / 이미지 추가
// 포트폴리오 페이지 링크트리
// 콘텍트 마커

//
