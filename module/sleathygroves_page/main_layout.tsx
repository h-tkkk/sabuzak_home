import { Box, Typography } from "@mui/material";
import Footer from "../../composition/footer/footer";
import CharacterInfo from "./character_info";
import LinkCarousel from "./link_carousel";
import SleathyStore from "./sleathy_store";

export default function MainLayout() {
    return (
        <Box width={"100%"} height={"100%"} pt={9}>
            {/* header */}
            <Box
                height={"100%"}
                maxHeight={500}
                sx={{
                    backgroundImage: `url(/img/sleathygroves_banner.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            {/* brand info */}
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} py={5.625} gap={3.75}>
                <Typography fontSize={{ xs: 20, sm: 24, md: 28, lg: 32 }}>{"브랜드 소개"}</Typography>
                <Box pb={6.125}>
                    <Typography
                        sx={{ fontSize: { sm: 16, mm: 17, md: 20, lg: 24 } }}
                        fontFamily={"Pretendard"}
                        whiteSpace={"pre-wrap"}
                        textAlign={"center"}
                    >
                        {
                            "우리 근처에 있지만, 우리는 눈치채지 못하는 작고 꾀죄죄한 곳\n털복숭이 숲요정 '그로비'들과\n해발고도 4cm, 세상에서 가장 작은 산 '마운팅 옹'\n그리고 조금은 특별한 색채를 가진 숲속 친구들의 이야기"
                        }
                    </Typography>
                </Box>
            </Box>
            {/* character info */}
            <CharacterInfo />
            {/* more */}
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} pt={5.625} gap={3.75}>
                <Typography fontSize={{ xs: 28, sm: 36, md: 42, lg: 48 }}>{"꾀죄죄한 작은 숲이 궁금하다면"}</Typography>
                <Box pb={6.125}>
                    <Typography
                        sx={{ fontSize: { sm: 16, mm: 17, md: 20, lg: 24 } }}
                        fontFamily={"Pretendard"}
                        whiteSpace={"pre-wrap"}
                        textAlign={"center"}
                    >
                        {"더욱 다양한 인형들과 작가님들의 이야기가 궁금하다면\n아래에 방문하기 버튼을 눌러보세요."}
                    </Typography>
                </Box>
            </Box>
            {/* link carousel*/}
            <LinkCarousel />
            {/* store */}
            <SleathyStore />

            <Footer />
        </Box>
    );
}
