import { Box, Grid, Paper, Typography } from "@mui/material";
import Header from "../../composition/header/header";
import Footer from "../../composition/footer/footer";

interface PortfolioData {
    title: string;
    englishTitle: string;
    mainContent: string;
    subContent: string;
    imgList: string[];
}

const data: PortfolioData[] = [
    {
        title: "콤플렉스 아카데미",
        englishTitle: "Complex Academy",
        mainContent: "콤플렉스를 극복하지 않아도\n있는 그대로의 내가 행복이다.",
        subContent: "라미와 친구들의 마법 학교 일상을 통해 보여주는\n여러가지 콤플렉스와 그를 통해 성장하는 이야기",
        imgList: ["/img/margazine_1.png", "/img/margazine_2.png", "/img/margazine_3.png"],
    },
    {
        title: "햄밍웨이",
        englishTitle: "Hamingway",
        mainContent: "나, 햄밍웨이 1.3세, 70구람!🐹\n눈물 한 방울 💧 흘려 본 적 없는 싸나이!",
        subContent: "멋진 선장이 되고픈 햄밍웨이와\n햄스터 마을 친구들의 아기자기한 일상",
        imgList: ["/img/hamingway_1.png", "/img/hamingway_2.png", "/img/hamingway_3.png"],
    },
    {
        title: "쑝쑝 매거진",
        englishTitle: "ssyong.ssyong margazine",
        mainContent: "얼렁뚱땅 짧툰",
        subContent: "리액션 맛집 동물들이 보여주는\n일상 속 새로운 시선과 재미있는 리액셕의 짧툰",
        imgList: ["/img/margazine_1.png", "/img/margazine_2.png", "/img/margazine_3.png"],
    },
    {
        title: "콤플렉스 아카데미",
        englishTitle: "Complex Academy",
        mainContent: "콤플렉스를 극복하지 않아도\n있는 그대로의 내가 행복이다.",
        subContent: "라미와 친구들의 마법 학교 일상을 통해 보여주는\n여러가지 콤플렉스와 그를 통해 성장하는 이야기",
        imgList: ["/img/margazine_1.png", "/img/margazine_2.png", "/img/margazine_3.png"],
    },
    {
        title: "햄밍웨이",
        englishTitle: "Hamingway",
        mainContent: "나, 햄밍웨이 1.3세, 70구람!🐹\n눈물 한 방울 💧 흘려 본 적 없는 싸나이!",
        subContent: "멋진 선장이 되고픈 햄밍웨이와\n햄스터 마을 친구들의 아기자기한 일상",
        imgList: ["/img/hamingway_1.png", "/img/hamingway_2.png", "/img/hamingway_3.png"],
    },
];

export default function PfEx1() {
    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Header />

            <Box width={"100%"} height={"100%"}>
                <Box py={12} px={"10%"}>
                    <Box sx={{ flexGrow: 1, p: 2 }}>
                        <Grid container spacing={2}>
                            {data.map((item, index) => (
                                <>
                                    {index % 2 === 0 ? (
                                        <>
                                            {item.imgList.map((img, idx) => (
                                                <Grid item xs={3} key={`${item.englishTitle} ${idx}`}>
                                                    <img src={img} alt={`image ${idx}`} style={{ width: "100%" }} />
                                                </Grid>
                                            ))}
                                            <Grid display={"flex"} flexDirection={"column"} justifyContent={"space-between"} item xs={3} my={4}>
                                                <Box>
                                                    <Typography fontWeight={900} sx={{ fontSize: { xs: "18px", md: "24px", lg: "42px" } }}>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography fontWeight={600} sx={{ fontSize: { xs: "16px", md: "18px", lg: "24px" } }}>
                                                        {item.englishTitle}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        fontWeight={600}
                                                        sx={{ fontSize: { xs: "14px", md: "16px", lg: "18px" }, whiteSpace: "pre-wrap" }}
                                                    >
                                                        {item.mainContent}
                                                    </Typography>
                                                    <Typography
                                                        fontWeight={500}
                                                        sx={{ fontSize: { xs: "12px", md: "14px", lg: "16px" }, whiteSpace: "pre-wrap" }}
                                                    >
                                                        {item.subContent}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </>
                                    ) : (
                                        <>
                                            <Grid display={"flex"} flexDirection={"column"} justifyContent={"space-between"} item xs={3} my={4}>
                                                <Box>
                                                    <Typography fontWeight={900} sx={{ fontSize: { xs: "18px", md: "24px", lg: "42px" } }}>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography fontWeight={600} sx={{ fontSize: { xs: "16px", md: "18px", lg: "24px" } }}>
                                                        {item.englishTitle}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        fontWeight={600}
                                                        sx={{ fontSize: { xs: "14px", md: "16px", lg: "18px" }, whiteSpace: "pre-wrap" }}
                                                    >
                                                        {item.mainContent}
                                                    </Typography>
                                                    <Typography
                                                        fontWeight={500}
                                                        sx={{ fontSize: { xs: "12px", md: "14px", lg: "16px" }, whiteSpace: "pre-wrap" }}
                                                    >
                                                        {item.subContent}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            {item.imgList.map((img, idx) => (
                                                <Grid item xs={3} key={`${item.englishTitle} ${idx}`}>
                                                    <img src={img} alt={`image ${idx}`} style={{ width: "100%" }} />
                                                </Grid>
                                            ))}
                                        </>
                                    )}
                                </>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
