import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export default function ContextUs() {
    const router = useRouter();

    return (
        <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} pt={8} id="introduction" gap={8}>
            <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={16}>
                <Box display={"flex"} flexDirection={"column"} gap={4}>
                    <Typography fontSize={36} whiteSpace={"pre-wrap"} textAlign={"center"}>
                        {"Cooperation makes it\npossible to produce even\nmore wonderful results."}
                    </Typography>
                    <Typography fontFamily={"Pretendard"} fontSize={18} whiteSpace={"pre-wrap"} textAlign={"center"}>
                        {
                            "사부작 스튜디오는\n더 멋진 아이디어를 가지고 계신\n제작자와 협업을 기다립니다.\n더 재미있고 더 감동적인 이야기를\n함께 만들어보아요."
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
