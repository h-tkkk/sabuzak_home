import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Carousel } from "@trendyol-js/react-carousel";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const items = [
    {
        name: "꾀죄죄한작은숲 인스타그램",
        img: "/img/sleat_link/sleat_link1.png",
        link: "https://www.instagram.com/sleathygroves/",
    },
    {
        name: "투데이솜 인스타그램",
        img: "/img/sleat_link/sleat_link2.png",
        link: "https://www.instagram.com/todaysom/",
    },
    {
        name: "꾀.병 인형병원 인스타그램",
        img: "/img/sleat_link/sleat_link2.png",
        link: "https://www.instagram.com/scruffy_hospital/",
    },
];

export default function Linkarousel() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box display={"flex"} flexDirection={"column"} pl={"3.125%"}>
            <Carousel show={isMobile ? 1.5 : 2.75} slide={1} swiping={true} responsive={true} leftArrow={<></>} rightArrow={<></>}>
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </Box>
    );

    function Item(props) {
        const percentage = (397 / 1920) * 100;

        return (
            <Box
                display="flex"
                flexDirection="column"
                sx={{
                    borderRadius: 7.5,
                    // margin: isMobile ? "1%" : "2%",
                    marginX: isMobile ? "1%" : "3%",
                }}
            >
                <Box height={isMobile ? 200 : 540} bgcolor="#FFFAF0" sx={{ borderRadius: 7.5, width: "100%", position: "relative" }}>
                    <img
                        src={props.item.img}
                        alt={`image`}
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            objectFit: "cover",
                            borderRadius: "30px 30px 0 0",
                        }}
                    />
                </Box>
                <Box
                    width="100%"
                    display="flex"
                    flexDirection={isMobile ? "column" : "row"}
                    justifyContent="space-between"
                    bgcolor="#FFFAF0"
                    py={isMobile ? "5%" : "7.4%"}
                    px={isMobile ? "2%" : "4.3%"}
                    sx={{ borderRadius: "0 0 30px 30px" }}
                >
                    <Typography fontSize={{ xs: 14, sm: 18, md: 20, lg: 24 }}>{props.item.name}</Typography>
                    <Button
                        sx={{
                            display: "flex",
                            height: isMobile ? 24 : 29,
                            p: 0,
                            px: { xs: 2, sm: 3, md: 4, lg: 4.5 },
                            background: "#EEE",
                            borderRadius: 7.5,
                            color: "#000",
                        }}
                        onClick={() => window.open(props.item.link, "_blank")}
                    >
                        <Typography fontFamily="Pretendard" sx={{ fontSize: { xs: 10, sm: 12, md: 14, lg: 16 } }} color="#000">
                            {"방문하기"}
                        </Typography>
                        <KeyboardArrowRightIcon />
                    </Button>
                </Box>
            </Box>
        );
    }
}
