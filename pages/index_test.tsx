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
import { GetStaticProps } from "next";

interface HomePageProps {
    seo: {
        title: string;
        description: string;
        url: string;
        image: string;
    };
}

export default function Home({ seo }: HomePageProps) {
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
        const homeElement = document.getElementById("home");
        if (homeElement) {
            homeElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Head>
                <title>Sabuzak Studio</title>
                <meta name="description" content={seo.description} />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:image" content={seo.image} />
                <meta property="og:url" content={seo.url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="keywords"
                    content="sbz,사부작 스튜디오,사부작,햄밍웨이,콤플렉스 아카데미,쑝쑝 메거진,꾀죄죄한작은숲,꾀작숲,사부작사부작스튜디오"
                />
                <link rel="canonical" href="https://www.sbzsbz.com" />
            </Head>
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

export const getStaticProps: GetStaticProps = async () => {
    const seo = {
        title: "Sabuzakx2 Studio",
        description: "사부작사부작 스튜디오",
        url: "https://www.sbzsbz.com",
        image: "https://www.sbzsbz.com/img/main_section/full_img.png",
    };

    return {
        props: {
            seo,
        },
    };
};
