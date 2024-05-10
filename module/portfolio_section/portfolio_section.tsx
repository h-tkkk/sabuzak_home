import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const portfolioItem = ["Complex Academy", "SsyongSsyong", "hamingway"];
const portfolioItem2 = ["a", "b", "c"];

export default function PortfolioSection() {
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} height={"100%"} id={"portfolio"} pt={8}>
            <Typography fontWeight={900} fontSize={50} color={"#133F7F"}>
                {"포트폴리오"}
            </Typography>
            <Box>
                <Typography fontSize={24}>{"포트폴리오에 관한 내용을 적습니다. 내용은 두 줄에서 네 줄 정도 생각하고 있습니다."}</Typography>
                <Typography fontSize={24}>{"포트폴리오에 관한 내용을 적습니다. 내용은 두 줄에서 네 줄 정도 생각하고 있습니다."}</Typography>
                <Typography fontSize={24}>{"포트폴리오에 관한 내용을 적습니다. 내용은 두 줄에서 네 줄 정도 생각하고 있습니다."}</Typography>
                <Typography fontSize={24}>{"포트폴리오에 관한 내용을 적습니다. 내용은 두 줄에서 네 줄 정도 생각하고 있습니다."}</Typography>
            </Box>

            <Box width={"100%"} py={4}>
                <Carousel
                    showArrows={true}
                    centerMode={true}
                    centerSlidePercentage={50}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    infiniteLoop={true}
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
        </Box>
    );
}
