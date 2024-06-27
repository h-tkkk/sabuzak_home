import Head from "next/head";

interface PortfolioHeadProps {
    title: string;
    description: string;
    ogImage: string;
    keywords: string;
    subUrl: string;
}

export default function PortfolioHead(props: PortfolioHeadProps) {
    return (
        <Head>
            <title>{`${props.title} - Sabuzak Studio`}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta property="og:title" content={`${props.title} - Sabuzak Studio`} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={`https://www.sbzsbz.com/img/${props.ogImage}`} />
            <link rel="canonical" href={`https://www.sbzsbz.com/${props.subUrl}`} />
        </Head>
    );
}
