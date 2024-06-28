// app/about/layout.tsx

import { ReactNode } from "react";

export async function generateMetadata() {
    return {
        title: "About - Sabuzakx2 Studio",
        description: "사부작사부작 스튜디오의 소개 페이지입니다. 창의적이고 멋진 아이디어와 함께합니다.",
        openGraph: {
            url: "https://www.sbzsbz.com/about",
            type: "website",
            title: "About - Sabuzakx2 Studio",
            description: "사부작사부작 스튜디오의 소개 페이지입니다. 창의적이고 멋진 아이디어와 함께합니다.",
            images: [
                {
                    url: "https://www.sbzsbz.com/img/about_banner.png",
                    width: 1200,
                    height: 630,
                    alt: "About Sabuzakx2 Studio",
                },
            ],
        },
    };
}

export default function AboutLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
