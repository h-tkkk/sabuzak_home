// app/about/layout.tsx

import { ReactNode } from "react";

export async function generateMetadata() {
    return {
        title: "Contact - Sabuzakx2 Studio",
        description: "서울특별시 강남구 학동로7길 29 | email: sabuzakx2studio@gmail.com | tel: 02-6213-3100",
        openGraph: {
            url: "https://www.sbzsbz.com/contact",
            type: "website",
            title: "Contact - Sabuzakx2 Studio",
            description: "서울특별시 강남구 학동로7길 29 | email: sabuzakx2studio@gmail.com | tel: 02-6213-3100",
            images: [
                {
                    url: "https://www.sbzsbz.com/img/main_prot/complex.png",
                    width: 1200,
                    height: 630,
                    alt: "About Sabuzakx2 Studio",
                },
            ],
        },
    };
}

export default function ContactLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
