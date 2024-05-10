import { Box, Typography } from "@mui/material";
import MainLayout from "../composition/layout/main_layout";
import Header from "../composition/header/header";

export default function portfolioPage() {
    return (
        <MainLayout>
            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Header />

                <Box pt={8}>
                    <Typography>portfolio</Typography>
                </Box>
            </Box>
        </MainLayout>
    );
}
