import { Box } from "@mui/material";
import Header from "../composition/header/header";
import Footer from "../composition/footer/footer";
import ContextUs from "../module/context_us";
import Testing from "../module/testing";
import HomeSection from "../module/section/home_section";
import ArrowNavigation from "../component/arrow_navigation";

export default function Home() {
    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Header />
            {/* Content */}
            <Box width={"100%"} height={"100%"}>
                <HomeSection />
                <Testing />
                <Testing />
                <Testing />
                <Testing />
                <Testing />
                <ContextUs />
                <Footer />
            </Box>
            {/* Array Navigation */}
            <ArrowNavigation />
        </Box>
    );
}

// about
// pro
// contenx s
// instar api
