import { Box } from "@mui/material";
import Header from "../../composition/header/header";
import MainLayout from "../../module/sleathygroves_page/main_layout";

export async function generateMetadata() {
    return {
        title: "꾀죄죄한 작은 숲 - Sabuzakx2 Studio",
        description:
            "우리 근처에 있지만, 우리는 눈치채지 못하는 작고 꾀죄죄한 곳 털복숭이 숲요정 '그로비' 들과 해발고도 4cm,세상에서 가장 작은 산 '마운틴 옹' 그리고 조금은 특별한 색채를 가진 숲속 친구들의 이야기",
        openGraph: {
            url: "https://www.sbzsbz.com/sleathygroves",
            type: "website",
            title: "꾀죄죄한 작은 숲 - Sabuzakx2 Studio",
            description:
                "우리 근처에 있지만, 우리는 눈치채지 못하는 작고 꾀죄죄한 곳 털복숭이 숲요정 '그로비' 들과 해발고도 4cm,세상에서 가장 작은 산 '마운틴 옹' 그리고 조금은 특별한 색채를 가진 숲속 친구들의 이야기",
            images: [
                {
                    url: "https://www.sbzsbz.com/img/sleathygroves_banner.png",
                    width: 800,
                    height: 600,
                    alt: "Sleathygroves banner",
                },
            ],
        },
    };
}

export default function SleathygrovesPage() {
    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} sx={{ overflowX: "hidden" }}>
            <Header />
            <MainLayout />
        </Box>
    );
}
