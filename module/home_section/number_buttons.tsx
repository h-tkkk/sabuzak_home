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
                        minWidth: 36, // 버튼 최소 너비
                        minHeight: 36, // 버튼 최소 높이
                        textTransform: "none", // 버튼 텍스트 대문자 방지
                        borderRadius: "4px", // 버튼 둥글기 설정
                        border: "none",
                    }}
                >
                    <Typography color={props.selectNum === number ? "#fff" : COLORS.grayScale[50]} fontSize={props.selectNum === number ? 24 : 12}>
                        {number < 10 ? `0${number}` : number}
                    </Typography>
                </Button>
            ))}
        </Box>
    );
}
