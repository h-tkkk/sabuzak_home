import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import KeywordBox from "./keyword_box";
import ArrowIcon from "@assets/arrow.svg";
import { useRouter } from "next/router";

const aboutList = [
    {
        imgUrl: "/img/ssyong_ssyong_magazine.jpg",
        keyword: "컴플렉스 아카데미",
    },
    {
        imgUrl: "/img/ssyong_ssyong_magazine.jpg",
        keyword: "숑숑 매거진",
    },
    {
        imgUrl: "/img/ssyong_ssyong_magazine.jpg",
        keyword: "햄밍웨이",
    },
];

export default function AboutSection() {
    const router = useRouter();

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    let bgFont = isLg ? 180 : isMd ? 100 : 140;
    let bgTopOpset = isLg ? "6%" : isMd ? "9%" : "7.5%";

    return (
        <Box
            width={"100%"}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            pt={8}
            id="about"
            sx={{
                backgroundImage: "linear-gradient(#fff 25%, #fff 25%, #E3ECF9 25%, #E3ECF9 75%)",
                position: "relative",
                "&::before": {
                    content: '"About"',
                    position: "absolute",
                    top: bgTopOpset,
                    left: "2%",
                    width: "auto",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: bgFont,
                    fontWeight: "bold",
                    color: "#E3ECF9",
                    zIndex: 0,
                },
            }}
        >
            <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={isMobile ? "column" : "row"}
                alignItems={"center"}
                gap={3}
                px={"10%"}
            >
                {aboutList.map((about, idx) => {
                    return <KeywordBox key={`keyword_${idx}`} imgUrl={about.imgUrl} keyword={about.keyword} />;
                })}
            </Box>
            <Box position={"absolute"} bottom={"10%"} right={"17%"}>
                <Button
                    onClick={() => router.push("/about")}
                    endIcon={<ArrowIcon sx={{ color: "#fff" }} />}
                    sx={{
                        px: "13px",
                        py: "9px",
                        background: "#000",
                        borderRadius: 4,
                        textTransform: "none",
                        "&:hover": {
                            background: "#000",
                        },
                    }}
                >
                    <Typography fontFamily={"Pretendard"} fontSize={13.44} fontWeight={500} color={"#fff"}>
                        {"View More"}
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}
