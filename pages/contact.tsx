import { Box, Button, Typography } from "@mui/material";
import Header from "../composition/header/header";
import Footer from "../composition/footer/footer";
import { CustomOverlayMap, Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default function ContactPage() {
    const [loading, error] = useKakaoLoader({
        appkey: "431a6afd7c870f435c3fca23a03699c5",
    });

    const handleEmailSend = () => {
        const email = "sabuzakx2studio@gmail.com";
        const subject = encodeURIComponent("사부작 스튜디오 제휴 문의");
        const body = encodeURIComponent("제휴에 관심이 있어 연락드립니다.\n자세한 내용을 논의하고 싶습니다.");

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Header />

            <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} width={"100%"} height={"100%"}>
                <Box display={"flex"} flexDirection={"column"} pt={8} height={"100%"}>
                    <Map
                        center={{ lat: 37.5138, lng: 127.023012 }}
                        style={{ width: "100%", height: "466px" }}
                        level={2}
                        draggable={false}
                        zoomable={false}
                    >
                        <CustomOverlayMap position={{ lat: 37.5138, lng: 127.023012 }}>
                            <Typography fontFamily={"Pretendard"} fontWeight={700}>
                                SABUZAK STUDIO
                            </Typography>
                        </CustomOverlayMap>
                    </Map>

                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Typography fontFamily={"Pretendard"} fontWeight={900} fontSize={60}>
                            Contact
                        </Typography>
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
                            <Typography fontFamily={"Pretendard"} fontWeight={600} sx={{ fontSize: { xs: "10px", md: "14px", lg: "28px" } }}>
                                {"서울특별시 강남구 학동로7길 29"}
                            </Typography>
                            <Typography fontFamily={"Pretendard"} fontWeight={600} sx={{ fontSize: { xs: "10px", md: "14px", lg: "28px" } }}>
                                {"(02)-6213-3100 (평일 09:00 ~ 18:00)"}
                            </Typography>
                            <Typography fontFamily={"Pretendard"} fontWeight={600} sx={{ fontSize: { xs: "10px", md: "14px", lg: "28px" } }}>
                                {"sabuzakx2studio@gmail.com"}
                            </Typography>
                        </Box>
                        <Box>
                            <Button
                                onClick={handleEmailSend}
                                sx={{
                                    px: 2,
                                    background: "#000",
                                    borderRadius: 4,
                                    "&:hover": {
                                        background: "#000",
                                    },
                                }}
                            >
                                <Typography fontSize={16} fontWeight={500} color={"#fff"}>
                                    {"제휴문의 보내기"}
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Footer />
            </Box>
        </Box>
    );
}
