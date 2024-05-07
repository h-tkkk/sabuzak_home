import { Backdrop, Box, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../pages/_app";
import { theme } from "../../src/theme";

export default function Header() {
    const { toggleColorMode, mode } = useContext(ColorModeContext);
    return (
        <Box height={64} position="relative">
            <Backdrop sx={{ height: 64, zIndex: theme.zIndex.drawer + 1, color: "#fff", backdropFilter: "blur(8px)" }} open={true}>
                <Box width={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={2}>
                    <Box display={"flex"}>
                        <Typography>SABUZAK STUDIO</Typography>
                    </Box>
                    {/* Menu Bar */}
                    <Typography>Menu Bar</Typography>

                    <Box display={"flex"} alignItems={"center"}>
                        <Switch onClick={toggleColorMode} />
                        <Typography>{mode} Mode</Typography>
                    </Box>
                </Box>
            </Backdrop>
        </Box>
    );
}
