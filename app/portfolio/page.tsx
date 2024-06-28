import { Box } from "@mui/material";
import Header from "../../composition/header/header";
import ImgEx from "../../module/portfolio_page/img_ex";

export default function portfolioPage() {
    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Header />
            <ImgEx />
        </Box>
    );
}
