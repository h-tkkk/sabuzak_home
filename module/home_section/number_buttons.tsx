import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import COLORS from "../../src/theme_custom_color/custom_color";

interface NumberButtonsProps {
    onClick: (num: number) => void;
    selectNum: number;
}

export default function NumberButtons(props: NumberButtonsProps) {
    return (
        <Box display={"flex"} gap={2}>
            {[1, 2].map((number) => (
                <Button
                    key={number}
                    onClick={() => props.onClick(number)}
                    sx={{
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
                        color={props.selectNum === number ? "#fff" : COLORS.grayScale[50]}
                        fontSize={props.selectNum === number ? 24 : 12}
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
