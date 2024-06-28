import { Box, Typography } from "@mui/material";
import Header from "../composition/header/header";
import ImgEx from "../module/portfolio_page/img_ex";
import Head from "next/head";

export default function portfolioPage() {
    return (
        <>
            <Head>
                <title>Portfolio - Sabuzak Studio</title>
                <meta name="description" content="Portfolio - Sabuzak Studio." />
                <meta property="og:title" content="Portfolio - Sabuzak Studio" />
                <meta property="og:description" content="Portfolio - Sabuzak Studio" />
                <meta property="og:image" content="https://www.sbzsbz.com/img/port_img/port_coplex_bg.png" />
                <link rel="canonical" href="https://www.sbzsbz.com/portfolio" />
            </Head>
            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Header />
                <ImgEx />
            </Box>
        </>
    );
}
