import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../composition/header/header";
import Footer from "../composition/footer/footer";
import Head from "next/head";

export default function AboutPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Head>
                <title>About - Sabuzak Studio</title>
                <meta name="description" content="About - Sabuzak Studio." />
                <meta property="og:title" content="About - Sabuzak Studio" />
                <meta property="og:description" content="About - Sabuzak Studio" />
                <meta property="og:image" content="https://www.sbzsbz.com/img/about_banner.png" />
                <link rel="canonical" href="https://www.sbzsbz.com/about" />
            </Head>
            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Header />
                <Box height={"100%"} pt={9}>
                    <Box height={isMobile ? "20%" : 400} sx={{ backgroundImage: "url(/img/about_banner.png)", backgroundSize: "cover" }} />
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} pt={6.25}>
                            <Typography fontSize={isMobile ? 21 : 32}>{"작은 불씨부터 번져가는 불꽃"}</Typography>
                            <Typography fontSize={isMobile ? 21 : 32} textAlign={"center"}>
                                {"사부작사부작 스튜디오의 무한한 상상력을 보여드리겠습니다"}
                            </Typography>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} py={6.25}>
                            <Box display={"flex"} alignItems={"center"}>
                                <Typography fontSize={isMobile ? 130 : 200} color={"#C8C8C8"}>
                                    {"S"}
                                </Typography>
                                <Box mb={-5.25}>
                                    <Typography fontSize={isMobile ? 28 : 32}>{"erendipity"}</Typography>
                                    <Typography fontFamily={"Pretendard"} fontSize={isMobile ? 18 : 24}>
                                        {"뜻밖의 재미를 선사하는 이야기"}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display={"flex"} alignItems={"center"}>
                                <Typography fontSize={isMobile ? 130 : 200} color={"#C8C8C8"}>
                                    {"B"}
                                </Typography>
                                <Box mb={-5.25}>
                                    <Typography fontSize={isMobile ? 28 : 32}>{"eloved"}</Typography>
                                    <Typography fontFamily={"Pretendard"} fontSize={isMobile ? 18 : 24} whiteSpace={"pre-wrap"}>
                                        {isMobile ? "누구에게나 사랑받을 수 있는\n캐릭터" : "누구에게나 사랑받을 수 있는 캐릭터"}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display={"flex"} alignItems={"center"}>
                                <Typography fontSize={isMobile ? 130 : 200} color={"#C8C8C8"}>
                                    {"Z"}
                                </Typography>
                                <Box mb={-5.25}>
                                    <Typography fontSize={isMobile ? 28 : 32}>{"est"}</Typography>
                                    <Typography fontFamily={"Pretendard"} fontSize={isMobile ? 18 : 24} whiteSpace={"pre-wrap"}>
                                        {"콘텐츠에 대한 열의"}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Footer />
                </Box>
            </Box>
        </>
    );
}
