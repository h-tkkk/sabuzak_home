import { Box } from "@mui/material";
import Head from "next/head";
import Header from "../composition/header/header";
import MainLayout from "../module/sleathygroves_page/main_layout";
import PortfolioHead from "../component/portfolio_head";
import { NextSeo } from "next-seo";

export default function SleathygrovesPage() {
    const title = "꾀죄죄한 작은 숲";
    const description =
        "우리 근처에 있지만, 우리는 눈치채지 못하는 작고 꾀죄죄한 곳 털복숭이 숲요정 '그로비' 들과 해발고도 4cm,세상에서 가장 작은 산 '마운틴 옹' 그리고 조금은 특별한 색채를 가진 숲속 친구들의 이야기";
    const images = "https://www.sbzsbz.com/img/sleathygroves_banner.png";
    const url = "https://www.sbzsbz.com/sleathygroves";

    return (
        <>
            {/* <PortfolioHead
                title="꾀죄죄한 작은 숲"
                description="우리 근처에 있지만, 우리는 눈치채지 못하는 작고 꾀죄죄한 곳 털복숭이 숲요정 '그로비' 들과 해발고도 4cm,세상에서 가장 작은 산 '마운틴 옹' 그리고 조금은 특별한 색채를 가진 숲속 친구들의 이야기"
                ogImage="sleathygroves_banner.png"
                keywords="꾀죄죄,꾀죄죄한 작은 숲,마운팅옹,그로비,씨조새,숲요정,해발고도"
                subUrl="sleathygroves"
            /> */}
            {/* <Head>
                <title>꾀죄죄한 작은 숲 - Sabuzak Studio</title>
                <meta name="description" content="꾀죄죄한 작은 숲 - Sabuzak Studio." />
                <meta property="og:title" content="꾀죄죄한 작은 숲 - Sabuzak Studio" />
                <meta property="og:description" content="꾀죄죄한 작은 숲 - Sabuzak Studio" />
                <meta property="og:image" content="https://www.sbzsbz.com/img/sleathygroves_banner.png" />
                <link rel="canonical" href="https://www.sbzsbz.com/sleathygroves" />
                <meta name="keywords" content="꾀죄죄,꾀죄죄한 작은 숲,마운팅옹,그로비,씨조새,숲요정,해발고도" />
            </Head> */}
            <NextSeo
                title={"꾀죄죄한 작은 숲"}
                description={
                    "우리 근처에 있지만, 우리는 눈치채지 못하는 작고 꾀죄죄한 곳 털복숭이 숲요정 '그로비' 들과 해발고도 4cm,세상에서 가장 작은 산 '마운틴 옹' 그리고 조금은 특별한 색채를 가진 숲속 친구들의 이야기"
                }
                openGraph={{
                    title: title,
                    description: description,
                    images: [{ url: images }],
                    url: url,
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />
            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Header />
                <MainLayout />
            </Box>
        </>
    );
}
