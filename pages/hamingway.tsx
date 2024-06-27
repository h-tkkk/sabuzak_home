import { Box } from "@mui/material";
import Head from "next/head";
import Header from "../composition/header/header";
import MainLayout from "../module/hamingway_page/main_layout";

export default function HamingwayPage() {
    return (
        <>
            <Head>
                <title>햄밍웨이 - Sabuzak Studio</title>
                <meta name="description" content="햄밍웨이 - Sabuzak Studio." />
                <meta property="og:title" content="햄밍웨이 - Sabuzak Studio" />
                <meta property="og:description" content="햄밍웨이 - Sabuzak Studio" />
                <meta property="og:image" content="https://www.sbzsbz.com/img/hamingway_banner.png" />
                <link rel="canonical" href="https://www.sbzsbz.com/hamingway" />
            </Head>
            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Header />
                <MainLayout />
            </Box>
        </>
    );
}
