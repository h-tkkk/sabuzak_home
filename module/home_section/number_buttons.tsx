import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import COLORS from "../../src/theme_custom_color/custom_color";

interface NumberButtonsProps {
    onClick: (num: number) => void;
    selectNum: number;
}

export default function NumberButtons(props: NumberButtonsProps) {
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    let selectFont = isLg ? 28 : isMd ? (isMobile ? 16 : 20) : 24;
    let disableFont = isLg ? 20 : isMd ? (isMobile ? 14 : 16) : 18;

    return (
        <Box display={"flex"} gap={"26px"} pt={17.75} px={3}>
            {[1, 2].map((number) => (
                <Button
                    key={number}
                    onClick={() => props.onClick(number)}
                    sx={{
                        p: 0,
                        fontWeight: props.selectNum === number ? "bold" : "normal",
                        minWidth: 36,
                        minHeight: 36,
                        textTransform: "none",
                        borderRadius: "4px",
                        border: "none",
                        transition: "all 0.5s ease", // 모든 변경에 대해 0.3초 동안 애니메이션 적용
                        backgroundColor: "transparent",
                        // "&:hover": {
                        //     backgroundColor: props.selectNum === number ? "primary.light" : "grey.200", // 호버 시 배경 색 변경
                        // },
                    }}
                >
                    <Typography
                        fontFamily={"Pretendard"}
                        color={props.selectNum === number ? "#fff" : "#A1A1A1"}
                        fontWeight={props.selectNum === number ? 900 : 500}
                        fontSize={props.selectNum === number ? selectFont : disableFont}
                        sx={{
                            transition: "color 0.3s ease, font-size 0.3s ease", // 색상과 폰트 크기 변경에 애니메이션 적용
                        }}
                    >
                        {number < 10 ? `0${number}` : number}
                    </Typography>
                </Button>
            ))}
        </Box>
    );
}
