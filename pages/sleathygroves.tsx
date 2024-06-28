import { Box } from "@mui/material";
import Header from "../composition/header/header";
import MainLayout from "../module/sleathygroves_page/main_layout";
import { NextSeo } from "next-seo";
import { GetServerSideProps } from "next";

interface HomePageProps {
    seo: {
        title: string;
        description: string;
        url: string;
        image: string;
    };
}

export default function SleathygrovesPage({ seo }: HomePageProps) {
    return (
        <>
            <NextSeo
                title={seo.title}
                description={seo.description}
                canonical={seo.url}
                openGraph={{
                    title: seo.title,
                    description: seo.description,
                    images: [{ url: seo.image }],
                    url: seo.url,
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

export const getServerSideProps: GetServerSideProps = async () => {
    const seo = {
        title: "꾀죄죄한 작은 숲 - Sabuzakx2 Studio",
        description:
            "우리 근처에 있지만, 우리는 눈치채지 못하는 작고 꾀죄죄한 곳 털복숭이 숲요정 '그로비' 들과 해발고도 4cm, 세상에서 가장 작은 산 '마운틴 옹' 그리고 조금은 특별한 색채를 가진 숲속 친구들의 이야기",
        url: "https://www.sbzsbz.com/sleathygroves",
        image: "https://www.sbzsbz.com/img/sleathygroves_banner.png",
    };

    return {
        props: {
            seo,
        },
    };
};
