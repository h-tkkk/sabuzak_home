import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ArrowNavigation() {
    return (
        <Box
            position={"fixed"}
            bottom={0}
            left={"50%"}
            sx={{
                transform: "translateX(-50%)", // 아이콘을 정확히 중앙 정렬
                animation: "bounce 2s infinite", // 'bounce' 애니메이션 적용, 2초 주기로 무한 반복
            }}
        >
            <KeyboardArrowDownIcon sx={{ width: 36, height: 36, color: "#fff" }} />
        </Box>
    );
}
