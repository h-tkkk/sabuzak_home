import { Backdrop, Box, Button, Drawer, IconButton, Switch, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import { ColorModeContext } from "../../pages/_app";
import MyIcon from "@assets/sabuzak_icon.svg";
import MenuIcon from "@mui/icons-material/Menu";
import TextButton from "../../component/button/text_button";

export default function Header() {
    const { toggleColorMode, mode } = useContext(ColorModeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));

    const handleDrawerToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            height={64}
            px={"10%"}
            position="fixed"
            bgcolor="rgba(255, 255, 255, 0.1)"
            boxShadow="0px 2px -1px rgba(0, 0, 0, 0.1)"
            sx={{
                backdropFilter: "blur(24px)",
                zIndex: 1000,
            }}
        >
            <Box width={"100%"} display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex">
                    <MyIcon />
                </Box>
                <Box display="flex" alignItems="center">
                    {isMd ? (
                        <Fragment>
                            <Box display={"flex"}>
                                <TextButton text="About" />
                                <TextButton text="Portfolio" />
                                <TextButton text="Contact" />
                            </Box>
                            <Switch onClick={toggleColorMode} />
                        </Fragment>
                    ) : (
                        <IconButton onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    )}
                </Box>
            </Box>
            <Drawer
                anchor="right"
                open={sidebarOpen}
                onClose={handleDrawerToggle}
                sx={{
                    "& .MuiDrawer-paper": { width: "80%", maxWidth: 300 },
                }}
            >
                <Box
                    height={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                >
                    <Box>
                        <TextButton text="About" />
                        <TextButton text="Portfolio" />
                        <TextButton text="Contact" />
                    </Box>
                    <Box>
                        <Switch onClick={toggleColorMode} />
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
}
