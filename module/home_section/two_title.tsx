import { Box, Typography } from "@mui/material";

export default function TwoTitle() {
    return (
        <Box>
            <Typography fontWeight={700} color={"#fff"} fontSize={60}>
                {"다양한 캐릭터가 만들어내는"}
            </Typography>
            <Typography fontWeight={700} color={"#fff"} fontSize={60}>
                {"색다른 이야기들이 기다립니다."}
            </Typography>

            <Typography color={"#fff"} fontSize={24}>
                {"때로는 마법을 배우기도 하고"}
            </Typography>
            <Typography color={"#fff"} fontSize={24}>
                {"친구들과 어려움을 극복하기도 하죠."}
            </Typography>
            <Typography color={"#fff"} fontSize={24}>
                {"꿈을 이루기 위한 노력을 하고"}
            </Typography>
            <Typography color={"#fff"} fontSize={24}>
                {"더욱 넓은 세상을 마주하기도 합니다."}
            </Typography>
            <Typography color={"#fff"} fontSize={24}>
                {"재미있는 이야기를 통해 웃음을 만들기도 합니다."}
            </Typography>
        </Box>
    );
}
