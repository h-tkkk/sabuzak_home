import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";

interface PortfolioHeadProps {
    title: string;
    description: string;
    ogImage: string;
    keywords: string;
    subUrl: string;
}

export default function PortfolioHead(props: PortfolioHeadProps) {
    const fullUrl = `https://www.sbzsbz.com/${props.subUrl}`;
    const fullImageUrl = `https://www.sbzsbz.com/img/${props.ogImage}`;
    return (
        <Head>
            <title>{`${props.title} - Sabuzakx2 Studio`}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />

            {/* Facebook Meta Tags */}
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${props.title} - Sabuzak Studio`} />
            <meta property="og:description" content={props.description} />

            <meta property="og:image" content={fullImageUrl} />
            <link rel="canonical" href={fullUrl} />
        </Head>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const seo = {
        title: "꾀죄죄한 작은 숲 - Sabuzakx2 Studio",
        description:
            "우리 근처에 있지만, 우리는 눈치채지 못하는 작고 꾀죄죄한 곳 털복숭이 숲요정 '그로비' 들과 해발고도 4cm,세상에서 가장 작은 산 '마운틴 옹' 그리고 조금은 특별한 색채를 가진 숲속 친구들의 이야기",
        url: "https://www.sbzsbz.com/sleathygroves",
        image: "https://www.sbzsbz.com/img/sleathygroves_banner.png",
    };

    console.log(seo);

    return {
        props: {
            seo,
        },
    };
};

export const getStaticProps: GetStaticProps = async () => {
    const seo = {
        title: "꾀죄죄한 작은 숲 - Sabuzakx2 Studio",
        description:
            "우리 근처에 있지만, 우리는 눈치채지 못하는 작고 꾀죄죄한 곳 털복숭이 숲요정 '그로비' 들과 해발고도 4cm,세상에서 가장 작은 산 '마운틴 옹' 그리고 조금은 특별한 색채를 가진 숲속 친구들의 이야기",
        url: "https://www.sbzsbz.com/sleathygroves",
        image: "https://www.sbzsbz.com/img/sleathygroves_banner.png",
    };

    console.log(seo);

    return {
        props: {
            seo,
        },
    };
};
