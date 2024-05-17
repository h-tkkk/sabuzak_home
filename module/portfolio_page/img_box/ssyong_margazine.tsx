import { Box, Button, Typography } from "@mui/material";
import InstarIcon from "@assets/mdi_instagram.svg";

export default function SsyongMargazine() {
    const handleButtonClick = () => {
        window.open("https://www.instagram.com/ssyong.ssyong_magazine/", "_blank");
    };

    return (
        <Box
            className="boxWithDiagonalShadow_2"
            sx={{
                height: 529,
                background: `linear-gradient(-76deg, #D2EFFF 46%, rgba(255, 255, 255, 0) 46%), url('/img/port_img/port_ssong_bg.png')`,
                // background: "linear-gradient(-76deg, #D2EFFF 46%, #DAD7F9 46%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000",
                fontSize: "24px",
            }}
        >
            <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"center"}>
                <Box display={"flex"} width={"50%"} height={"100%"} alignItems={"center"}>
                    <img src={"/img/character_ssong.png"} alt={`image`} style={{ width: "100%", objectFit: "none" }} />
                </Box>
                <Box display={"flex"} width={"auto"} flexDirection={"column"} gap={2} pl={"17.5%"} mt={5}>
                    <Box>
                        <Typography fontSize={32}>{"쑝쑝 매거진"}</Typography>
                    </Box>
                    <Box>
                        <Typography fontSize={24} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                            {"겁많은 홀랭, 충격반전 개꿀쓰,\n못말리는 올이,\n그리고 그놈은 쓉 양아치-\n기타 등등.. 그들이 모였다!"}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography fontSize={16} fontWeight={200} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                            {"그 시절.. 그 감성.. 그 만화.. \n그리고 얼렁뚱땅 한 방울;;; \n새롭고 개성 넘치는 말장난 \n코믹-쑝쑝 매거진"}
                        </Typography>
                    </Box>
                    <Box display={"flex"} justifyContent={"flex-end"} width={"100%"} mt={1.75}>
                        <Button startIcon={<InstarIcon />} onClick={handleButtonClick} sx={{ textTransform: "none" }}>
                            <Typography fontFamily={"Pretendard"} fontSize={12} fontWeight={500} color={"#000"}>
                                {"Instagram"}
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
