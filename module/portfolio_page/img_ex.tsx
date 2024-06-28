"use client";

import { Box } from "@mui/material";
import Footer from "../../composition/footer/footer";
import ComplexAcademy from "./img_box/complex_academy";
import Hamingway from "./img_box/hamingway";
import SsyongMargazine from "./img_box/ssyong_margazine";
import Forest from "./img_box/forest";

export default function ImgEx() {
    return (
        <Box height={"100%"} pt={9}>
            <ComplexAcademy />
            <Hamingway />
            <SsyongMargazine />
            <Forest />

            <Footer />
        </Box>
    );
}
