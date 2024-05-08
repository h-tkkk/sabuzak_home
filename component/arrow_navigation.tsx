import { Box, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ArrowNavigation() {
    const handleNextSection = () => {
        const sections = ["home", "about"];
        const currentSection = sections.findIndex((section) => {
            console.log(`현재 섹션 ${section}`);
            const element = document.getElementById(section);
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        });
        const nextSection = sections[currentSection + 1] || sections[0]; // 다음 섹션, 마지막 섹션이면 첫 섹션으로 이동
        document.getElementById(nextSection).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box
            position={"fixed"}
            bottom={0}
            left={"50%"}
            sx={{
                transform: "translateX(-50%)",
                animation: "bounce 2s infinite",
            }}
        >
            <IconButton onClick={handleNextSection}>
                <KeyboardArrowDownIcon sx={{ width: 36, height: 36, color: "#fff" }} />
            </IconButton>
        </Box>
    );
}
