import { Box, Button, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../composition/header/header";
import Footer from "../composition/footer/footer";
import { CustomOverlayMap, Map, MapMarker, MapTypeId, useKakaoLoader } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function ContactPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [loading, error] = useKakaoLoader({
        appkey: "431a6afd7c870f435c3fca23a03699c5",
    });

    const handleEmailSend = () => {
        const email = "sabuzakx2studio@gmail.com";
        const subject = encodeURIComponent("사부작 스튜디오 제휴 문의");
        const body = encodeURIComponent(
            "회사명 : \n" +
                "직책 / 직급 : \n" +
                "이름 : \n" +
                "연락처 : \n" +
                "E-mail : \n\n\n\n" +
                "문의내용 : \n\n\n\n\n" +
                "제휴에 관심이 있어 연락드립니다.\n자세한 내용을 논의하고 싶습니다."
        );

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <>
            <Head>
                <title>Contact - Sabuzak Studio</title>
                <meta name="description" content="Contact - Sabuzak Studio." />
                <meta property="og:title" content="Contact - Sabuzak Studio" />
                <meta property="og:description" content="Contact - Sabuzak Studio" />
                <meta property="og:image" content="https://www.sbzsbz.com/img/main_section/full_img.png" />
                <link rel="canonical" href="https://www.sbzsbz.com/contact" />
            </Head>
            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Header />

                <Box height={"100%"} pt={8}>
                    <Map center={{ lat: 37.5138312153826, lng: 127.02302635432 }} style={{ width: "100%", height: "466px" }} level={2}>
                        <CustomOverlayMap position={{ lat: 37.5138312153826, lng: 127.02302635432 }}>
                            <MapMarker // 마커를 생성합니다
                                position={{
                                    // 마커가 표시될 위치입니다
                                    lat: 37.5138312153826,
                                    lng: 127.02302635432,
                                }}
                                image={{
                                    src: "/img/kakao_marker.png", // 마커이미지의 주소입니다
                                    size: {
                                        width: 64,
                                        height: 69,
                                    }, // 마커이미지의 크기입니다
                                    options: {
                                        offset: {
                                            x: 27,
                                            y: 79,
                                        }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                                    },
                                }}
                            />
                            <Box bgcolor={"#fff"}>
                                <Typography fontFamily={"Pretendard"} fontWeight={700}>
                                    {"SABUZAKx2 STUDIO"}
                                </Typography>
                            </Box>
                        </CustomOverlayMap>
                    </Map>

                    <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"} height={573}>
                        <Box pt={"50px"}>
                            <Typography fontFamily={"Pretendard"} fontWeight={900} fontSize={60}>
                                Contact
                            </Typography>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"30px"} pt={"60px"}>
                            <Typography fontFamily={"Pretendard"} fontWeight={600} sx={{ fontSize: { xs: "14px", md: "16px", lg: "28px" } }}>
                                {"서울특별시 강남구 학동로7길 29"}
                            </Typography>
                            <Typography fontFamily={"Pretendard"} fontWeight={600} sx={{ fontSize: { xs: "14px", md: "16px", lg: "28px" } }}>
                                {"02-6213-3100 (평일 09:00 ~ 18:00)"}
                            </Typography>
                            <Typography fontFamily={"Pretendard"} fontWeight={600} sx={{ fontSize: { xs: "14px", md: "16px", lg: "28px" } }}>
                                {"sabuzakx2studio@gmail.com"}
                            </Typography>
                        </Box>
                        <Box pt={"52px"} pb={"60px"}>
                            <Divider sx={{ width: 100, height: 2, bgcolor: "#000" }} />
                        </Box>
                        <Box>
                            <Button
                                onClick={handleEmailSend}
                                sx={{
                                    px: isMobile ? 3 : "37px",
                                    py: isMobile ? 2 : "18px",
                                    background: "#000",
                                    borderRadius: "30px",
                                    "&:hover": {
                                        background: "#000",
                                    },
                                }}
                            >
                                <Typography
                                    fontFamily={"Pretendard"}
                                    sx={{ fontSize: { xs: 14, md: "16px", lg: 20 } }}
                                    fontWeight={500}
                                    color={"#fff"}
                                >
                                    {"제휴문의 보내기"}
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Footer />
                </Box>
            </Box>
        </>
    );
}
