import { Box, Grid, Paper, Typography } from "@mui/material";

const storeItem = [
    {
        name: "겁쟁이 클로버 블루",
        img: "/img/sleat_store/sleat_store1.png",
        storeLink: "https://smartstore.naver.com/grovy/products/8291096561",
    },
    {
        name: "벗(친구)나무와 씨조새",
        img: "/img/sleat_store/sleat_store2.png",
        storeLink: "https://smartstore.naver.com/grovy/products/8727564957",
    },
    {
        name: "두타치 투_두더지 인형",
        img: "/img/sleat_store/sleat_store3.png",
        storeLink: "https://smartstore.naver.com/grovy/products/7893719602",
    },
    {
        name: "럭키 깨구리/럭키 맹꽁이",
        img: "/img/sleat_store/sleat_store4.png",
        storeLink: "https://smartstore.naver.com/grovy/products/7889959820",
    },
    {
        name: "미어캣 딩고Ver2_미어캣 인형",
        img: "/img/sleat_store/sleat_store5.png",
        storeLink: "https://smartstore.naver.com/grovy/products/7890767179",
    },
    {
        name: "오너먼트_웜뱃인형",
        img: "/img/sleat_store/sleat_store6.png",
        storeLink: "https://smartstore.naver.com/grovy/products/7900627823",
    },
    {
        name: "천사 피터파커와 행크 키링",
        img: "/img/sleat_store/sleat_store7.png",
        storeLink: "https://smartstore.naver.com/grovy/products/7900659264",
    },
    {
        name: "네모난쾌변 뭠맷씨와 똥육면체",
        img: "/img/sleat_store/sleat_store8.png",
        storeLink: "https://smartstore.naver.com/grovy/products/7893640798",
    },
];

export default function SleathyStore() {
    return (
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} py={5.625} gap={3.75}>
            <Typography fontSize={48}>{"스토어"}</Typography>
            <Box px={"18%"} pb={6.125}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {storeItem.map((value) => (
                            <Grid key={value.storeLink} item>
                                <Box
                                    sx={{
                                        backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#1A2027" : "#fff"),
                                        backgroundImage: `url(${value})`,
                                        backgroundSize: "cover",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => window.open(value.storeLink, "_blank")}
                                >
                                    <img src={value.img} />
                                    <Typography fontFamily={"Pretendard"} sx={{ fontSize: { sm: 16, mm: 17, md: 20, lg: 24 } }}>
                                        {value.name}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
