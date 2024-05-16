import { Box, Typography } from "@mui/material";

export default function Hamingway() {
    return (
        <Box
            className="boxWithDiagonalShadow"
            sx={{
                height: 529,
                background: `linear-gradient(-104deg, #FFE7B3 44%, rgba(255, 255, 255, 0) 44%), url('/img/port_img/port_way_bg.png')`,
                //background: "linear-gradient(-110deg, #FFE7B3 50%, #BFA177 50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000",
                fontSize: "24px",
            }}
        >
            <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"center"} gap={44}>
                <Box display={"flex"} height={"100%"} alignItems={"flex-end"} pl={8}>
                    <img src={"/img/character_way.png"} alt={`image`} style={{ width: "100%", paddingBottom: "27px" }} />
                </Box>
                <Box display={"flex"} width={"auto"} flexDirection={"column"} gap={2}>
                    <Box>
                        <Typography fontSize={32}>{"햄밍웨이"}</Typography>
                    </Box>
                    <Box>
                        <Typography fontSize={24} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                            {"나, 햄밍웨이 1.3세, 70구람!🐹\n눈물 한 방울 💧 흘려 본 적 없는 싸나이!"}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography fontSize={16} fontWeight={200} fontFamily={"Pretendard"} whiteSpace={"pre-wrap"}>
                            {"멋진 선장이 되고픈 햄밍웨이와\n햄스터 마을 친구들의 아기자기한 일상"}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
