import { Backdrop, Box, Button, Drawer, IconButton, Switch, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment, useContext, useEffect, useState } from "react";
import { ColorModeContext } from "../../pages/_app";
import SabuzakWhite from "@assets/sabuzak_icon_white.svg";
import MenuIcon from "@mui/icons-material/Menu";
import SabuzakIcon from "@assets/logo_sm.svg";
import SabuzakSmIcon from "@assets/sm_home.svg";
import TextButton from "../../component/button/text_button";
import Link from "next/link";
import { useRootStores } from "../../rootStore/rootStore";
import { observer } from "mobx-react";
import { useRouter } from "next/router";

const Header = observer(() => {
    const router = useRouter();
    const rootStore = useRootStores();
    const { toggleColorMode, mode } = useContext(ColorModeContext);

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleDrawerToggle = () => {
        rootStore.setSidebarOpen(!rootStore.sidebarOpen);
    };

    useEffect(() => {
        const checkScroll = () => {
            const homeElement = document.getElementById("home");
            if (homeElement) {
                const rect = homeElement.getBoundingClientRect();
                const isHalfScrolled = rect.top <= -rect.height;

                isHalfScrolled ? rootStore.setHeaderColor("#fff") : rootStore.setHeaderColor("transparent");
                isHalfScrolled ? rootStore.setMainScrollStatus(true) : rootStore.setMainScrollStatus(false);
            }
        };

        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    });

    useEffect(() => {
        if (router.pathname !== "/") {
            rootStore.setHeaderColor("#fff");
            rootStore.setMainScrollStatus(true);
        } else {
            rootStore.setHeaderColor("transparent");
            rootStore.setMainScrollStatus(false);
        }
    }, [router.pathname]);

    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            height={"auto"}
            // px={42.5}
            px={isMobile ? "10.5%" : "18%"}
            bgcolor={rootStore.headerColor}
            position="fixed"
            boxShadow="0px 2px -1px rgba(0, 0, 0, 0.1)"
            sx={{
                zIndex: 1000,
            }}
            py={1.25}
        >
            <Box width={"100%"} display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems={"center"}>
                    <Link href={"/"} style={{ display: "flex" }}>
                        {isMd ? (
                            rootStore.mainScrollStatus ? (
                                <SabuzakIcon />
                            ) : (
                                <SabuzakWhite />
                            )
                        ) : (
                            <SabuzakSmIcon width={42} height={42} fill={rootStore.mainScrollStatus ? "#133F7F" : "#fff"} />
                        )}
                    </Link>
                </Box>
                <Box display="flex" alignItems="center">
                    {isMd ? (
                        <Fragment>
                            <Box display={"flex"} gap={3}>
                                <TextButton text="About" />
                                <TextButton text="Portfolio" />
                                <TextButton text="Contact" />
                            </Box>
                        </Fragment>
                    ) : (
                        <IconButton onClick={handleDrawerToggle}>
                            <MenuIcon sx={{ color: rootStore.mainScrollStatus ? "#000" : "#fff" }} />
                        </IconButton>
                    )}
                </Box>
            </Box>
            <Drawer
                anchor="right"
                open={rootStore.sidebarOpen}
                onClose={handleDrawerToggle}
                sx={{
                    "& .MuiDrawer-paper": { width: "80%", maxWidth: 300, borderRadius: "10px 0 0 10px" },
                }}
            >
                <Box
                    height={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    role="presentation"
                    bgcolor={"#133F7F"}
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                    py={3}
                >
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={3.75} py={10}>
                        <TextButton text="About" />
                        <TextButton text="Portfolio" />
                        <TextButton text="Contact" />
                    </Box>
                    {/* <Box>
                        <Switch onClick={toggleColorMode} />
                    </Box> */}
                </Box>
            </Drawer>
        </Box>
    );
});

export default Header;
