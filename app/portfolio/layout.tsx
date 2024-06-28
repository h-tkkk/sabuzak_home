// app/about/layout.tsx

import { ReactNode } from "react";

export async function generateMetadata() {
    return {
        title: "Portfolio - Sabuzakx2 Studio",
        description: "사부작사부작 스튜디오 포트폴리오",
        openGraph: {
            url: "https://www.sbzsbz.com/portfolio",
            type: "website",
            title: "Portfolio - Sabuzakx2 Studio",
            description: "사부작사부작 스튜디오 포트폴리오",
            images: [
                {
                    url: "https://www.sbzsbz.com/img/og_portfoilo.png",
                    width: 1200,
                    height: 630,
                    alt: "About Sabuzakx2 Studio",
                },
            ],
        },
    };
}

export default function PortfolioLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
