import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Portfolio - Sabuzak Studio." />
                    <meta property="og:title" content="Portfolio - Sabuzak Studio" />
                    <meta property="og:description" content="Portfolio - Sabuzak Studio" />
                    <meta property="og:image" content="https://www.sbzsbz.com/img/port_img/port_coplex_bg.png" />
                    <link rel="canonical" href="https://www.sbzsbz.com/portfolio" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
