import { Box, Button, Typography } from "@mui/material";
import KeywordBox from "./keyword_box";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

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
                    top: "5.5%",
                    left: "2%",
                    width: "100%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "13em",
                    fontWeight: "bold",
                    color: "#E3ECF9",
                    zIndex: 0,
                },
            }}
        >
            <Box width={"100%"} height={"100%"} display={"flex"} alignItems={"center"} gap={3} px={20}>
                {aboutList.map((about, idx) => {
                    return <KeywordBox key={`keyword_${idx}`} imgUrl={about.imgUrl} keyword={about.keyword} />;
                })}
            </Box>
            <Box position={"relative"} bottom={"10%"} right={"10%"}>
                <Button
                    endIcon={<TrendingFlatIcon sx={{ color: "#fff" }} />}
                    sx={{
                        background: "#000",
                        borderRadius: 4,
                        "&:hover": {
                            background: "#000",
                        },
                    }}
                >
                    <Typography fontSize={16} fontWeight={500} color={"#fff"}>
                        {"View More"}
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}
