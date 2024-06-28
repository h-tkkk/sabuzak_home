import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowIcon from "@assets/arrow.svg";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const portfolioItem = ["complex.png", "ssong.png", "haming.png"];

const CenterSwiper = () => {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            height={"100%"}
            id={"portfolio"}
            alignItems={"center"}
            justifyContent={"center"}
            overflow={"hidden"}
            p={3}
            gap={9}
        >
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                {portfolioItem.map((item, idx) => (
                    <SwiperSlide
                        key={`${portfolioItem}_dd${idx}`}
                        style={{
                            backgroundImage: `url(/img/main_prot/tab_${item})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                ))}
            </Swiper>
            <Button
                onClick={() => router.push("/portfolio")}
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
    );
};

export default CenterSwiper;
