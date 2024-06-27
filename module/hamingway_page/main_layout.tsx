import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Footer from "../../composition/footer/footer";
import CharacterInfo from "./character_info";
import LinkCarousel from "./link_carousel";

export default function MainLayout() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box width={"100%"} height={"100%"} pt={9}>
            {/* banner */}
            <Box
                height={isMobile ? "20%" : 500}
                sx={{
                    backgroundImage: `url(/img/hamingway_banner.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            {/* brand info */}
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} py={5.625} gap={3.75}>
                <Typography fontSize={{ xs: 20, sm: 24, md: 28, lg: 32 }}>{"줄거리"}</Typography>
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
                <Typography fontSize={{ xs: 28, sm: 36, md: 42, lg: 48 }} textAlign={"center"} whiteSpace={"pre-wrap"}>
                    {"해당 캐릭터의 다양한 매력을\n빠르게 만나볼 수 있는 방법"}
                </Typography>
                <Box pb={6.125}>
                    <Typography
                        sx={{ fontSize: { sm: 16, mm: 17, md: 20, lg: 24 } }}
                        fontFamily={"Pretendard"}
                        whiteSpace={"pre-wrap"}
                        textAlign={"center"}
                    >
                        {
                            "해당 캐릭터들이 만들어내는 재미있는 이야기가 궁금하다면\n더 많은 에피소드가 기다리고 있는 플랫폼으로 안내합니다.\n역동적으로 움직이는 캐릭터들의 쇼츠도 볼 수 있습니다."
                        }
                    </Typography>
                </Box>
            </Box>
            {/* link carousel*/}
            <LinkCarousel />
            {/* store */}
            {/* <SleathyStore /> */}
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} pt={5.625} gap={3.75}>
                <Typography fontSize={{ xs: 28, sm: 36, md: 42, lg: 48 }} textAlign={"center"} whiteSpace={"pre-wrap"}>
                    {"항상 함께하는 경험"}
                </Typography>
                <Box pb={6.125}>
                    <Typography
                        sx={{ fontSize: { sm: 16, mm: 17, md: 20, lg: 24 } }}
                        fontFamily={"Pretendard"}
                        whiteSpace={"pre-wrap"}
                        textAlign={"center"}
                    >
                        {
                            "내가 좋아하는 캐릭터와 항상 함께 다양한 경험을 할 수 있습니다.\n온라인에서 오프라인까지 다양한 IP경험을 제공합니다.\n자신의 최애를 어디서든 즐겨보세요."
                        }
                    </Typography>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
}
