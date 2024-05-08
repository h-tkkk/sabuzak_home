import { Box, Typography } from "@mui/material";
import Header from "../composition/header/header";
import Footer from "../composition/footer/footer";
import ContextUs from "../module/context_us";
import Testing from "../module/testing";

export default function Home() {
    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Header />
            {/* Content */}
            <Box overflow={"auto"} paddingTop={8}>
                <Typography>git Flow</Typography>
                <Testing />
                <Testing />
                <Testing />
                <Testing />
                <Testing />
                <ContextUs />
                <Footer />
            </Box>
        </Box>
    );
}

// about
// pro
// contenx s
// instar api
