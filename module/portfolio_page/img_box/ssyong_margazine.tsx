import { Box, Typography } from "@mui/material";

export default function SsyongMargazine() {
    return (
        <Box
            sx={{
                height: 529,
                background: "linear-gradient(-100deg, #D2EFFF 50%, #DAD7F9 50%)",
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
                <Box display={"flex"} width={"auto"} flexDirection={"column"} gap={2} pl={"20%"}>
                    <Box>
                        <Typography fontSize={32}>{"쑝쑝 매거진"}</Typography>
                    </Box>
                    <Box>
                        <Typography fontSize={24} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                            {"우당탕탕 좌우충돌 빙글빙글\n천방지축 귀여븐 동물들의\n레디~ 리.액쑝!"}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography fontSize={16} fontWeight={200} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                            {"※연재는 내가 하고 싶을 때-_-^"}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
