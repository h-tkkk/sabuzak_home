import { Box, Typography } from "@mui/material";
import Header from "../composition/header/header";
import Footer from "../composition/footer/footer";

export default function AboutPage() {
    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Header />
            <Box height={"100%"} pt={9}>
                <Box height={400} sx={{ backgroundImage: "url(/img/about_banner.png)" }} />
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Box pt={6.25}>
                        <Typography fontSize={32}>{"사부작사부작,"}</Typography>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} pt={3.75}>
                        <Typography fontSize={32}>{"가벼운 상상력을 세계 곳곳으로 전하는 콘텐츠 디자인 회사"}</Typography>
                        <Typography fontSize={32}>{"사부작사부작(SBZ) 스튜디오입니다."}</Typography>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} pt={2.5}>
                        <Typography fontFamily={"Pretendard"} fontSize={24}>
                            {"애니메이션을 프로덕션뿐만 아니라, 최신 트렌드에 맞는 디지털 콘텐츠들을 발굴·제작을 합니다."}
                        </Typography>
                        <Typography fontFamily={"Pretendard"} fontSize={24}>
                            {"무궁무진하게 발전하는 트렌드에 발맞출 수 있도록 브랜딩하며,"}
                        </Typography>
                        <Typography fontFamily={"Pretendard"} fontSize={24}>
                            {"색다른 기획력으로 콘텐츠에 생동감을 불어넣기 위해 다양한 노력을 하고 있습니다."}
                        </Typography>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} py={6.25}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Typography fontSize={200} color={"#C8C8C8"}>
                                {"S"}
                            </Typography>
                            <Box mb={-5.25}>
                                <Typography fontSize={32}>{"erendipity"}</Typography>
                                <Typography fontFamily={"Pretendard"} fontSize={24}>
                                    {"주변의 일상들로부터 뜻밖의 재미를 발견해낸 이야기와"}
                                </Typography>
                            </Box>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <Typography fontSize={200} color={"#C8C8C8"}>
                                {"B"}
                            </Typography>
                            <Box mb={-5.25}>
                                <Typography fontSize={32}>{"eloved"}</Typography>
                                <Typography fontFamily={"Pretendard"} fontSize={24}>
                                    {"누구에게나 사랑받을 수 있는 캐릭터로"}
                                </Typography>
                            </Box>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <Typography fontSize={200} color={"#C8C8C8"}>
                                {"Z"}
                            </Typography>
                            <Box mb={-5.25}>
                                <Typography fontSize={32}>{"est"}</Typography>
                                <Typography fontFamily={"Pretendard"} fontSize={24} whiteSpace={"pre-wrap"}>
                                    {"레몬제스트처럼 삶에 묘미를 더해줄 수 있는"}
                                </Typography>
                                <Typography fontFamily={"Pretendard"} fontSize={24} whiteSpace={"pre-wrap"}>
                                    {"콘텐츠를 만듭니다."}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Footer />
            </Box>
        </Box>
    );
}
