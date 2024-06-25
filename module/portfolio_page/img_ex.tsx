import { Box, Typography } from "@mui/material";
import Footer from "../../composition/footer/footer";
import ComplexAcademy from "./img_box/complex_academy";
import Hamingway from "./img_box/hamingway";
import SsyongMargazine from "./img_box/ssyong_margazine";
import { Gallery, ThumbnailImageProps } from "react-grid-gallery";
import { useEffect, useState } from "react";
import Forest from "./img_box/forest";

const allImages = [
    { src: "/img/port_img/img1.png", width: 400, height: 400 },
    { src: "/img/port_img/img2.png", width: 400, height: 400 },
    { src: "/img/port_img/img3.png", width: 400, height: 400 },
];

const secondRowImages = [
    { src: "/img/port_img/img4.png", width: 400, height: 400 },
    { src: "/img/port_img/img5.png", width: 490, height: 240 },
    { src: "/img/port_img/img6.png", width: 240, height: 240 },
    { src: "/img/port_img/img7.png", width: 240, height: 240 },
];

export default function ImgEx() {
    const [images, setImages] = useState(allImages.slice(0, 4));

    // useEffect(() => {
    //     const intervalIds = images.map((img, idx) => {
    //         return setInterval(() => {
    //             const randomIndex = Math.floor(Math.random() * allImages.length);
    //             const newImage = allImages[randomIndex]; // 새 이미지 선택
    //             setImages((prevImages) => prevImages.map((oldImg, mapIdx) => (mapIdx === idx ? newImage : oldImg))); // 해당 인덱스의 이미지만 교체
    //         }, 5000 + idx * 5000); // 각 이미지가 조금씩 다른 시간에 변경되도록
    //     });

    //     return () => intervalIds.forEach(clearInterval); // 인터벌 정리
    // }, []);

    // const ThumbnailImageComponent = (props: ThumbnailImageProps) => {
    //     const { src, alt, style, title } = props.imageProps;

    //     return (
    //         <img
    //             src={props.imageProps.src}
    //             alt="Gallery"
    //             style={{
    //                 width: "100%",
    //                 height: "100%",
    //                 objectFit: "cover",
    //             }}
    //         />
    //     );
    // };

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

// <Box display={"flex"} flexDirection={"column"} alignItems={"center"} py={6.25}>
//     <Gallery
//         enableImageSelection={false}
//         images={allImages.map((img, index) => ({
//             ...img,
//             customOverlay: <Box>{/* <Typography>h2</Typography> */}</Box>,
//         }))}
//         defaultContainerWidth={400}
//         rowHeight={400}
//     />
//     <Gallery enableImageSelection={false} images={secondRowImages} rowHeight={240} defaultContainerWidth={240} />
// </Box>
