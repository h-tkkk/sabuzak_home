import { Box } from "@mui/material";
import Head from "next/head";
import Header from "../composition/header/header";
import MainLayout from "../module/sleathygroves_page/main_layout";

export default function SleathygrovesPage() {
    return (
        <>
            <Head>
                <title>꾀죄죄한 작은 숲 - Sabuzak Studio</title>
                <meta name="description" content="Portfolio - Sabuzak Studio." />
                <meta property="og:title" content="Portfolio - Sabuzak Studio" />
                <meta property="og:description" content="Portfolio - Sabuzak Studio" />
                <meta property="og:image" content="https://www.sbzsbz.com/img/port_img/port_coplex_bg.png" />
                <link rel="canonical" href="https://www.sbzsbz.com/portfolio" />
            </Head>
            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Header />
                <MainLayout />
            </Box>
        </>
    );
}
