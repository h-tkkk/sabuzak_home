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
