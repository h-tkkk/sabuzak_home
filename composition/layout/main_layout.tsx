import { Box } from "@mui/material";

export default function MainLayout(props: any) {
    return (
        <Box display={"flex"} width={"100%"} height={"100vh"} flexDirection={"column"} justifyContent={"space-between"}>
            {props.children}
        </Box>
    );
}
