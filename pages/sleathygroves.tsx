import { Box } from "@mui/material";
import Head from "next/head";
import Header from "../composition/header/header";
import MainLayout from "../module/sleathygroves_page/main_layout";

export default function SleathygrovesPage() {
    return (
        <>
            <Head>
                <title>꾀죄죄한 작은 숲 - Sabuzak Studio</title>
                <meta name="description" content="꾀죄죄한 작은 숲 - Sabuzak Studio." />
                <meta property="og:title" content="꾀죄죄한 작은 숲 - Sabuzak Studio" />
                <meta property="og:description" content="꾀죄죄한 작은 숲 - Sabuzak Studio" />
                <meta property="og:image" content="https://www.sbzsbz.com/img/sleathygroves_banner.png" />
                <link rel="canonical" href="https://www.sbzsbz.com/sleathygroves" />
            </Head>
            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Header />
                <MainLayout />
            </Box>
        </>
    );
}
