import { Box } from "@mui/material";
import Header from "../composition/header/header";
import Footer from "../composition/footer/footer";
import ContextUs from "../module/context_us";

export default function Home() {
    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Header />
            {/* Content */}
            <h1>사부작~ SPA</h1>
            <ContextUs />

            <Footer />
        </Box>
    );
}
