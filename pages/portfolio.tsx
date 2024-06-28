import { Box } from "@mui/material";
import Header from "../composition/header/header";
import ImgEx from "../module/portfolio_page/img_ex";
import Head from "next/head";
import { GetServerSideProps } from "next";

interface Props {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    canonical: string;
}

const PortfolioPage: React.FC<Props> = ({ title, description, ogTitle, ogDescription, ogImage, canonical }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={ogImage} />
                <link rel="canonical" href={canonical} />
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
        props: {
            title: "Portfolio - Sabuzak Studio",
            description: "Portfolio - Sabuzak Studio.",
            ogTitle: "Portfolio - Sabuzak Studio",
            ogDescription: "Portfolio - Sabuzak Studio",
            ogImage: "https://www.sbzsbz.com/img/port_img/port_coplex_bg.png",
            canonical: "https://www.sbzsbz.com/portfolio",
        },
    };
};

export default PortfolioPage;
