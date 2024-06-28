"use client";

import { Box, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import LeftArrow from "@assets/left-arrow.svg";
import RightArrow from "@assets/right-arrow.svg";

const items = [
    {
        name: "마운틴.옹",
        imgPaths: ["/img/sleat_char/mountin1.png", "/img/sleat_char/mountin2.png", "/img/sleat_char/mountin3.png"],
        description:
            "마운팅.옹은 꾀죄죄한 작은 숲에서 탄생한\n아주 작은 '산' 친구들입니다.\n해발고도 4cm의 세상에서 가장 작은 산이지만\n어마어마하게 큰 매력을 가지고 있습니다.",
    },
    {
        name: "럭키 깨구리 & 럭키 맹꽁이",
        imgPaths: ["/img/sleat_char/luck1.png", "/img/sleat_char/luck2.png", "/img/sleat_char/luck3.png"],
        description:
            "럭키 깨구리와 럭키 맹꽁이는\n꾀죄죄한 작은 숲 속에서 행운의 상징으로\n대표되는 전설의 동물입니다.\n빵실한 엉덩이가 매력 포인트입니다.",
    },
    {
        name: "그로비",
        imgPaths: ["/img/sleat_char/grovy1.png", "/img/sleat_char/grovy2.png", "/img/sleat_char/grovy3.png"],
        description:
            "그로비는 꾀죄죄한 작은숲 메인 캐릭터로 작은 숲에\n모여사는 자그마한 종족입니다. 인간들을 매우 좋아하며,\n인간의 삶을 동경합니다. 앙증맞은 팔다리와 복실복실\n털이 특징이며, 흔들면 삐약삐약 웁니다.",
    },
    {
        name: "벗(친구)나무와 씨조새",
        imgPaths: ["/img/sleat_char/bird1.png", "/img/sleat_char/bird2.png", "/img/sleat_char/bird3.png"],
        description:
            "꾀죄죄한 작은 숲을 지키던\n씨조새는 반짝임을 찾아 작은 숲을 떠나기로 했어요.\n씨조새가 떠난 후 홀로 남은 해파리는\n씨조새가 언제든 놀러 와서 쉴 수 있는\n벗(友) 나무를 심었습니다.",
    },
];

export default function CharacterInfo() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box px={"18%"} pb={4.875}>
                <Typography fontSize={32}>{"캐릭터 소개"}</Typography>
            </Box>
            <Box height={"100%"}>
                <Carousel
                    NextIcon={<RightArrow />}
                    PrevIcon={<LeftArrow />}
                    autoPlay={false}
                    navButtonsAlwaysVisible={!isMobile}
                    fullHeightHover={true}
                    navButtonsProps={{
                        style: {
                            backgroundColor: "transparent",
                            borderRadius: 0,
                            marginRight: "5vw",
                            marginLeft: "5vw",
                        },
                    }}
                    indicatorContainerProps={{
                        style: {
                            textAlign: "end",
                            paddingRight: "18%",
                        },
                    }}
                    indicatorIconButtonProps={{
                        style: {
                            width: 10,
                            height: 10,
                            paddingRight: 8,
                            paddingLeft: 8,
                            color: "#777",
                        },
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            width: 16,
                            height: 16,
                            backgroundColor: "#000", // 2
                            color: "#000",
                        },
                    }}
                >
                    {items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </Carousel>
            </Box>
        </Box>
    );

    function Item(props) {
        const percentage = (397 / 1920) * 100;

        return (
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>
                        {props.item.imgPaths.map((value) => (
                            <Grid key={value} item>
                                <Paper
                                    sx={{
                                        height: `${percentage}vw`,
                                        width: `${percentage}vw`,
                                        backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#1A2027" : "#fff"),
                                        backgroundImage: `url(${value})`,
                                        backgroundSize: "cover",
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Box width={"50%"} height={200}>
                    <Typography fontSize={{ xs: 20, sm: 24, md: 28, lg: 32 }}>{props.item.name}</Typography>
                    <Typography fontFamily={"Pretendard"} fontSize={{ xs: 18, sm: 20, md: 24, lg: 28 }} whiteSpace={"pre-wrap"}>
                        {props.item.description}
                    </Typography>
                </Box>
            </Box>
        );
    }
}
