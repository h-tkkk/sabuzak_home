import { Box, Typography } from "@mui/material";

export default function ContextUs() {
    return (
        <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} pt={8} id="introduction" gap={8}>
            <Box>
                <Typography>사진 자리~</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={3}>
                <Box>
                    <Typography fontSize={36} whiteSpace={"pre-wrap"}>
                        {"Cooperation makes it\npossible to produce even\nmore wonderful results."}
                    </Typography>
                </Box>
                <Box>
                    <Typography fontFamily={"Pretendard"} fontSize={18} whiteSpace={"pre-wrap"}>
                        {
                            "사부작 스튜디오는\n더 멋진 아이디어를 가지고 계신\n제작자와 협업을 기다립니다.\n더 재미있고 더 감동적인 이야기를\n함께 만들어보아요."
                        }
                    </Typography>
                </Box>
                <Box>
                    <Typography>{"사부작과 함께하기"}</Typography>
                </Box>
            </Box>
        </Box>
    );
}
