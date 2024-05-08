import { Backdrop, Box, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../pages/_app";
import MyIcon from "@assets/sabuzak_icon.svg";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
    const { toggleColorMode, mode } = useContext(ColorModeContext);
    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            height={64}
            px={20}
            position="fixed"
            bgcolor="rgba(255, 255, 255, 0.1)"
            boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)"
        >
            <Box width={"100%"} display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex">
                    <MyIcon />
                </Box>
                <Box display="flex" alignItems="center">
                    <Box display={"flex"}>
                        <Box px={2}>
                            <Typography>About</Typography>
                        </Box>
                        <Box px={2}>
                            <Typography>Portfolio</Typography>
                        </Box>
                        <Box px={2}>
                            <Typography>Contact</Typography>
                        </Box>
                    </Box>
                    <Switch onClick={toggleColorMode} />
                    <MenuIcon />
                </Box>
            </Box>
        </Box>
    );
}
