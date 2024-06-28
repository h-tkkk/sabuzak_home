import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export default function ContextUs() {
    const router = useRouter();

    return (
        <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} pt={8} id="introduction" gap={8}>
            <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={16}>
                <Box display={"flex"} flexDirection={"column"} gap={4}>
                    <Typography whiteSpace={"pre-wrap"} textAlign={"center"} sx={{ fontSize: { xs: "26px", md: "24px", lg: 36 } }}>
                        {"Cooperation makes it\npossible to produce even\nmore wonderful results"}
                    </Typography>
                    <Typography
                        fontFamily={"Pretendard"}
                        sx={{ fontSize: { xs: 18, md: "24px", lg: 18 } }}
                        whiteSpace={"pre-wrap"}
                        textAlign={"center"}
                    >
                        {
                            "사부작사부작 스튜디오는\n창의적이고 멋진 아이디어를 가지고 계신\n제작자분들과의 협업을 기다립니다\n재미있고 감동적인 이야기를\n함께 만들어나갈 날들을 기대합니다"
                        }
                    </Typography>
                </Box>
                <Button sx={{ color: "#133F7F" }} onClick={() => router.push("/contact")} endIcon={<KeyboardArrowRightRoundedIcon />}>
                    <Typography fontFamily={"Pretendard"} fontSize={16}>
                        {"사부작과 함께하기"}
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}
