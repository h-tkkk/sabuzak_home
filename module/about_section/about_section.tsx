import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import KeywordBox from "./keyword_box";
import ArrowIcon from "@assets/arrow.svg";
import { useRouter } from "next/navigation";
import AboutZ from "@assets/about_z.svg";
import AboutB from "@assets/about_b.svg";
import AboutS from "@assets/about_s.svg";
import MobileBox from "./mobile_box";

const aboutList = [
    {
        keyword: "S",
        hover_keyword: "Serendipity",
        sub_keyword: "뜻밖의 재미",
        videoSrc: "/video/ad_01.mp4",
        icon: <AboutS />,
    },
    {
        keyword: "B",
        hover_keyword: "Beloved",
        sub_keyword: "사랑받는 캐릭터",
        videoSrc: "/video/ad_02.mp4",
        icon: <AboutB />,
    },
    {
        keyword: "Z",
        hover_keyword: "Zest",
        sub_keyword: "열의",
        videoSrc: "/video/ad_03.mp4",
        icon: <AboutZ />,
    },
];

export default function AboutSection() {
    const router = useRouter();

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    let bgFont = isLg ? 180 : isMd ? (isMobile ? 100 : 140) : 100;
    let bgTopOpset = isLg ? "6%" : isMd ? (isMobile ? "-4%" : "-3.5%") : "7.5%";

    const bgImage = isMd
        ? "linear-gradient(#fff 12%, #fff 12%, #E3ECF9 12%, #E3ECF9 75%)"
        : "linear-gradient(#fff 25%, #fff 25%, #E3ECF9 25%, #E3ECF9 75%)";

    return (
        <Box
            width={"100%"}
            height={isMd ? "auto" : "100%"}
            display={"flex"}
            justifyContent={"center"}
            py={isMd ? 30 : 8}
            id="about"
            sx={{
                backgroundImage: bgImage,
                position: "relative",
                "&::before": {
                    content: '"About"',
                    position: "absolute",
                    top: bgTopOpset,
                    left: isMd ? "" : "2%",
                    width: "auto",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isMd ? "center" : "flex-start",
                    fontSize: bgFont,
                    fontWeight: "bold",
                    color: "#E3ECF9",
                    zIndex: 0,
                },
            }}
        >
            {isMd ? (
                <Box
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={isMd ? "column" : "row"}
                    alignItems={"center"}
                    gap={3}
                    px={"10%"}
                >
                    {aboutList.map((about, idx) => {
                        let vedioIndex = idx + 1;

                        return (
                            <MobileBox
                                key={`keyword_${idx}`}
                                icon={about.icon}
                                keyword={about.keyword}
                                hover_keyword={about.hover_keyword}
                                videoSrc={`/video/ad_0${vedioIndex}.mp4`}
                                sub_keyword={about.sub_keyword}
                            />
                        );
                    })}
                </Box>
            ) : (
                <Box
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={isMd ? "column" : "row"}
                    alignItems={"center"}
                    gap={3}
                    px={"10%"}
                >
                    {aboutList.map((about, idx) => {
                        let vedioIndex = idx + 1;
                        return (
                            <KeywordBox
                                key={`keyword_${idx}`}
                                icon={about.icon}
                                keyword={about.keyword}
                                hover_keyword={about.hover_keyword}
                                videoSrc={`/video/ad_0${vedioIndex}.mp4`}
                                sub_keyword={about.sub_keyword}
                            />
                        );
                    })}
                </Box>
            )}
            <Box position={"absolute"} bottom={isMobile ? "10%" : "5%"} right={isMobile ? "none" : "17%"}>
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
