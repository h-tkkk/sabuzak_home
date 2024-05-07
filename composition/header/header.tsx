import { Box, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../pages/_app";

export default function Header() {
    const { toggleColorMode, mode } = useContext(ColorModeContext);
    return (
        <Box display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"}>
                <Typography>Icon</Typography>
                <Typography>헤더</Typography>
            </Box>
            {/* Menu Bar */}
            <Typography>Menu Bar</Typography>
            <Box display={"flex"}>
                <Box display={"flex"} alignItems={"center"} px={2}>
                    <Switch onClick={toggleColorMode} />
                    <Typography>{mode} Mode</Typography>
                </Box>
                <Typography>hamburger Icon</Typography>
            </Box>
        </Box>
    );
}
