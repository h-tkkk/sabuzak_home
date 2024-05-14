import { Box } from "@mui/material";
import Header from "../composition/header/header";

export default function AboutPage() {
    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Header />
            <Box height={"100%"} pt={8}>
                <Box height={400} sx={{ backgroundImage: "url(/img/about_banner.png)" }} />
            </Box>
        </Box>
    );
}
