import { Backdrop, Box, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../pages/_app";
import { theme } from "../../src/theme";

export default function Header() {
    const { toggleColorMode, mode } = useContext(ColorModeContext);
    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            height={64}
            px={3}
            position="fixed"
            bgcolor="rgba(255, 255, 255, 0.1)"
            boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)"
        >
            <Box width={"100%"} display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex">
                    <Typography variant="h6" color="inherit">
                        SABUZAK STUDIO
                    </Typography>
                </Box>
                {/* Menu Bar */}
                <Typography>Menu Bar</Typography>

                <Box display="flex" alignItems="center">
                    <Switch onClick={toggleColorMode} />
                    <Typography>{mode} Mode</Typography>
                </Box>
            </Box>
        </Box>
    );
}
