import Head from "next/head";
import RootLazyout from "./root_lazyout";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
    return {
        title: "Sabuzakx2 Studio",
        description:
            "사부작사부작 스튜디오는 창의적이고 멋진 아이디어를 가지고 계신 제작자분들과의 협업을 기다립니다 재미있고 감동적인 이야기를 함께 만들어나갈 날들을 기대합니다",
        openGraph: {
            url: "https://www.sbzsbz.com",
            type: "website",
            title: "Sabuzakx2 Studio",
            description:
                "사부작사부작 스튜디오는 창의적이고 멋진 아이디어를 가지고 계신 제작자분들과의 협업을 기다립니다 재미있고 감동적인 이야기를 함께 만들어나갈 날들을 기대합니다",
            images: [
                {
                    url: "https://www.sbzsbz.com/img/og_main.png",
                    width: 1200,
                    height: 630,
                    alt: "Sleathygroves banner",
                },
            ],
        },
        verification: {
            google: "MF1bKjXjgvrg6RgHOipe-DdlbnnTYZqVUKmDBZdVKeA",
            other: {
                naver: "e28872b5016b420276e8606e6b59d8d4eb700b32",
            },
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                <RootLazyout>{children}</RootLazyout>
            </body>
        </html>
    );
}
