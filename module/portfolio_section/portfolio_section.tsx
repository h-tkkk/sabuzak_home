import { Box, IconButton, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const portfolioItem = ["Complex Academy", "SsyongSsyong", "hamingway"];
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function PortfolioSection() {
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} height={"100%"} id={"portfolio"} pt={8}>
            <Carousel
                width={"100%"}
                showArrows={true}
                centerMode={true}
                centerSlidePercentage={50}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                autoFocus={true}
                autoPlay={true}
                infiniteLoop={true}
                renderArrowPrev={(clickHandler, hasPrev) => {
                    return (
                        <IconButton onClick={clickHandler} sx={{ border: "1px solid" }} style={{ position: "absolute", left: "45%", top: "110%" }}>
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                    );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        <IconButton onClick={clickHandler} sx={{ border: "1px solid" }} style={{ position: "absolute", right: "45%", top: "110%" }}>
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    );
                }}
            >
                {portfolioItem.map((item, idx) => (
                    <Box key={`${portfolioItem}_${idx}`}>
                        <Typography fontWeight={900} fontSize={48} color={"#fff"}>
                            {item}
                        </Typography>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
}
