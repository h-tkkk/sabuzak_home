import { Box } from "@mui/material";
import Head from "next/head";
import Header from "../composition/header/header";
import MainLayout from "../module/complex_academy_page/main_layout";

export default function ComplexAcademyPage() {
    return (
        <>
            <Head>
                <title>콤플렉스 아카데미 - Sabuzak Studio</title>
                <meta name="description" content="콤플렉스 아카데미 - Sabuzak Studio." />
                <meta property="og:title" content="콤플렉스 아카데미 - Sabuzak Studio" />
                <meta property="og:description" content="콤플렉스 아카데미 - Sabuzak Studio" />
                <meta property="og:image" content="https://www.sbzsbz.com/img/complex_academy_banner.png" />
                <link rel="canonical" href="https://www.sbzsbz.com/complex_academy" />
            </Head>
            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Header />
                <MainLayout />
            </Box>
        </>
    );
}
