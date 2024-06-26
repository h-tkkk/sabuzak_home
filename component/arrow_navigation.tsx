import { Box, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";

const sections = ["home", "about", "portfolio", "introduction"];

export default function ArrowNavigation() {
    const [arrowColor, setArrowColor] = useState("#fff");

    const handleNextSection = () => {
        let targetSectionIndex = 0;
        for (let i = 0; i < sections.length; i++) {
            const element = document.getElementById(sections[i]);
            if (element) {
                const rect = element.getBoundingClientRect();

                // 현재 화면에서 부분적으로 보이는 섹션을 찾는 로직
                if (rect.bottom > 0 && rect.top < window.innerHeight) {
                    if (rect.bottom > window.innerHeight) {
                        // 섹션의 하단이 화면 밖에 있으면 그 섹션으로 스크롤
                        targetSectionIndex = i;
                    } else {
                        // 섹션이 완전히 화면에 보이면 다음 섹션으로 이동
                        targetSectionIndex = (i + 1) % sections.length;
                    }
                    break;
                }
            }
        }

        const nextSection = sections[targetSectionIndex];
        const nextElement = document.getElementById(nextSection);
        if (nextElement) {
            nextElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        const checkScroll = () => {
            const homeElement = document.getElementById("home");
            if (homeElement) {
                const rect = homeElement.getBoundingClientRect();
                const isHalfScrolled = rect.top <= -rect.height / 2;

                isHalfScrolled ? setArrowColor("#133F7F") : setArrowColor("#fff");
            }
        };

        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            position={"fixed"}
            bottom={0}
            sx={{
                animation: "bounce 2s infinite",
            }}
        >
            <IconButton onClick={handleNextSection} sx={{ padding: 0 }}>
                <KeyboardArrowDownIcon sx={{ width: 36, height: 36, color: arrowColor }} />
            </IconButton>
        </Box>
    );
}
