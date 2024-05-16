import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRootStores } from "../../rootStore/rootStore";
import { observer } from "mobx-react";

const NumberButtons = observer(() => {
    const rootStore = useRootStores();

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    let selectFont = isLg ? 28 : isMd ? (isMobile ? 16 : 20) : 24;
    let disableFont = isLg ? 20 : isMd ? (isMobile ? 14 : 16) : 18;

    const handleTitleChange = (num: number) => {
        console.log(num);
        rootStore.setEntering(false);
        setTimeout(() => {
            if (num === 2) {
                rootStore.setHeaderColor("#123456");
            } else {
                rootStore.setHeaderColor("transparent");
            }
            rootStore.setHomeMainNum(num);
            rootStore.setEntering(true);
        }, 500);
    };

    return (
        <Box display={"flex"} gap={"26px"} pt={17.75} px={3}>
            {[1, 2].map((number) => (
                <Button
                    key={number}
                    onClick={() => handleTitleChange(number)}
                    sx={{
                        p: 0,
                        fontWeight: rootStore.homeMainNum === number ? "bold" : "normal",
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
                        color={rootStore.homeMainNum === number ? "#fff" : "#A1A1A1"}
                        fontWeight={rootStore.homeMainNum === number ? 900 : 500}
                        fontSize={rootStore.homeMainNum === number ? selectFont : disableFont}
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
});

export default NumberButtons;
