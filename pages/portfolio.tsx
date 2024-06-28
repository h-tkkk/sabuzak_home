import { Box } from "@mui/material";
import Header from "../composition/header/header";
import ImgEx from "../module/portfolio_page/img_ex";
import Head from "next/head";
import { GetServerSideProps } from "next";

const PortfolioPage = () => {
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
};

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {}, // 나중에 필요한 데이터를 여기서 전달할 수 있습니다.
    };
};

export default PortfolioPage;
