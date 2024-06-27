import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import LeftArrow from "@assets/left-arrow.svg";
import RightArrow from "@assets/right-arrow.svg";

const items = [
    {
        name: "햄밍웨이",
        description:
            "그로비는 꾀죄죄한 작은숲 메인 캐릭터로 작은 숲에\n모여사는 자그마한 종족입니다. 인간들을 매우 좋아하며,\n인간의 삶을 동경합니다. 앙증맞은 팔다리와 복실복실\n털이 특징이며, 흔들면 삐약삐약 웁니다.",
        characterSoloImg: "/img/sleat_char/mountin2.png",
        characterLookImg: "/img/sleat_char/mountin2.png",
        descImg: "/img/sleat_char/mountin2.png",
    },
    {
        name: "럭키 깨구리 & 럭키 맹꽁이",
        description:
            "럭키 깨구리와 럭키 맹꽁이는\n꾀죄죄한 작은 숲 속에서 행운의 상징으로\n대표되는 전설의 동물입니다.\n빵실한 엉덩이가 매력 포인트입니다.",
        characterSoloImg: "",
        characterLookImg: "",
        descImg: "",
    },
    {
        name: "마운틴.옹",
        description:
            "마운팅.옹은 꾀죄죄한 작은 숲에서 탄생한\n아주 작은 '산' 친구들입니다.\n해발고도 4cm의 세상에서 가장 작은 산이지만\n어마어마하게 큰 매력을 가지고 있습니다.",
        characterSoloImg: "",
        characterLookImg: "",
        descImg: "",
    },
    {
        name: "벗(친구)나무와 씨조새",
        description:
            "꾀죄죄한 작은 숲을 지키던\n씨조새는 반짝임을 찾아 작은 숲을 떠나기로 했어요.\n씨조새가 떠난 후 홀로 남은 해파리는\n씨조새가 언제든 놀러 와서 쉴 수 있는\n벗(友) 나무를 심었습니다.",
        characterSoloImg: "",
        characterLookImg: "",
        descImg: "",
    },
];

export default function EpisodeCarousel() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    // indicator
    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box display={"flex"} flexDirection={"column"} position="relative" pt={"5%"}>
            <Box
                bgcolor={"#133F7F"}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mx={"18%"}
                py={2.4375}
                px={3.25}
                position="relative"
            >
                <Typography fontSize={32} color={"#fff"}>
                    {`Episode 0${activeStep + 1}`}
                </Typography>
                <Box id="carousel-indicators" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {items.map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: activeStep === index ? 15 : 10,
                                height: activeStep === index ? 15 : 10,
                                borderRadius: "50%",
                                backgroundColor: activeStep === index ? "#fff" : "#DBDBDB",
                                cursor: "pointer",
                            }}
                            onClick={() => handleStepChange(index)}
                        />
                    ))}
                </Box>
            </Box>
            <Box height={"100%"}>
                <Carousel
                    index={activeStep}
                    onChange={handleStepChange}
                    NextIcon={<RightArrow />}
                    PrevIcon={<LeftArrow />}
                    autoPlay={false}
                    navButtonsAlwaysVisible={!isMobile}
                    fullHeightHover={true}
                    navButtonsProps={{
                        style: {
                            backgroundColor: "transparent",
                            borderRadius: 0,
                            paddingRight: "5vw",
                            paddingLeft: "5vw",
                        },
                    }}
                    indicatorContainerProps={{
                        style: {
                            textAlign: "end",
                            paddingRight: "18%",
                        },
                    }}
                    indicators={false}
                >
                    {items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </Carousel>
            </Box>
        </Box>
    );

    function Item(props) {
        return (
            <Box sx={{ flexGrow: 1 }} px={"18%"}>
                <Grid container spacing={0} pb={1}>
                    <Grid item xs={12}>
                        <ItemComponent height={400}>
                            <img
                                src={props.item.characterSoloImg}
                                alt="character solo"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </ItemComponent>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <ItemComponent height={200}>
                            <img
                                src={props.item.characterLookImg}
                                alt="character look"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </ItemComponent>
                    </Grid>
                    <Grid item xs={4}>
                        <ItemComponent height={200}>
                            <img
                                src={props.item.characterLookImg}
                                alt="character look"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </ItemComponent>
                    </Grid>
                    <Grid item xs={4}>
                        <ItemComponent height={200}>
                            <img
                                src={props.item.characterLookImg}
                                alt="character look"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </ItemComponent>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

function ItemComponent({ children, height }) {
    const percentage = (height / 1920) * 100;

    return (
        <Box
            sx={{
                height: `${percentage}vw`, // 모든 그리드 항목의 높이를 동일하게 설정
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#1A2027" : "#BFBFBF"),
            }}
        >
            {children}
        </Box>
    );
}
