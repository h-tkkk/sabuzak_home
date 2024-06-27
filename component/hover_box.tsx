import { Box, styled } from "@mui/material";

const HoverBox = styled(Box)(({ color }) => ({
    position: "relative",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    transition: "background-color 0.3s ease",
    "&:hover": {
        backgroundColor: color,
        "& .content": {
            opacity: 0,
            transition: "opacity 0.3s ease",
        },
        "& .overlay": {
            opacity: 1,
            transition: "opacity 0.3s ease",
            pointerEvents: "all",
        },
    },
}));

export default HoverBox;
