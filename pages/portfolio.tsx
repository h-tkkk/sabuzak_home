import { Box, Grid, Paper, Typography } from "@mui/material";
import MainLayout from "../composition/layout/main_layout";
import Header from "../composition/header/header";
import Footer from "../composition/footer/footer";
import PfEx1 from "../module/portfolio_page/ex1";
import ImgEx from "../module/portfolio_page/img_ex";
import Head from "next/head";

interface PortfolioData {
    title: string;
    englishTitle: string;
    mainContent: string;
    subContent: string;
    imgList: string[];
}

const data: PortfolioData[] = [
    {
        title: "콤플렉스 아카데미",
        englishTitle: "Complex Academy",
        mainContent: "콤플렉스를 극복하지 않아도\n있는 그대로의 내가 행복이다.",
        subContent: "라미와 친구들의 마법 학교 일상을 통해 보여주는\n여러가지 콤플렉스와 그를 통해 성장하는 이야기",
        imgList: ["/img/margazine_1.png", "/img/margazine_2.png", "/img/margazine_3.png"],
    },
    {
        title: "햄밍웨이",
        englishTitle: "Hamingway",
        mainContent: "나, 햄밍웨이 1.3세, 70구람!🐹\n눈물 한 방울 💧 흘려 본 적 없는 싸나이!",
        subContent: "멋진 선장이 되고픈 햄밍웨이와\n햄스터 마을 친구들의 아기자기한 일상",
        imgList: ["/img/hamingway_1.png", "/img/hamingway_2.png", "/img/hamingway_3.png"],
    },
    {
        title: "쑝쑝 매거진",
        englishTitle: "ssyong.ssyong margazine",
        mainContent: "얼렁뚱땅 짧툰",
        subContent: "리액션 맛집 동물들이 보여주는\n일상 속 새로운 시선과 재미있는 리액셕의 짧툰",
        imgList: ["/img/margazine_1.png", "/img/margazine_2.png", "/img/margazine_3.png"],
    },
    {
        title: "콤플렉스 아카데미",
        englishTitle: "Complex Academy",
        mainContent: "콤플렉스를 극복하지 않아도\n있는 그대로의 내가 행복이다.",
        subContent: "라미와 친구들의 마법 학교 일상을 통해 보여주는\n여러가지 콤플렉스와 그를 통해 성장하는 이야기",
        imgList: ["/img/margazine_1.png", "/img/margazine_2.png", "/img/margazine_3.png"],
    },
    {
        title: "햄밍웨이",
        englishTitle: "Hamingway",
        mainContent: "나, 햄밍웨이 1.3세, 70구람!🐹\n눈물 한 방울 💧 흘려 본 적 없는 싸나이!",
        subContent: "멋진 선장이 되고픈 햄밍웨이와\n햄스터 마을 친구들의 아기자기한 일상",
        imgList: ["/img/hamingway_1.png", "/img/hamingway_2.png", "/img/hamingway_3.png"],
    },
];

export default function portfolioPage() {
    return (
        <>
            <Head>
                <title>Contact - Sabuzak Studio</title>
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
