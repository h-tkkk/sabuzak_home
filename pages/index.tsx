import { Box } from "@mui/material";
import Header from "../composition/header/header";
import Footer from "../composition/footer/footer";

export default function Home() {
    return (
        <Box height={"100%"}>
            <Header />
            {/* Content */}
            <h1>사부작~ SPA</h1>
            <Footer />
        </Box>
    );
}
