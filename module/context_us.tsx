import { Box, Typography } from "@mui/material";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default function ContextUs() {
    const [loading, error] = useKakaoLoader({
        appkey: "431a6afd7c870f435c3fca23a03699c5",
    });

    return (
        <Box>
            {loading ? (
                <Box>
                    <Typography>Kakao Map을 불러오는 중</Typography>
                </Box>
            ) : (
                <Map center={{ lat: 37.5138, lng: 127.023012 }} style={{ width: "100%", height: "360px" }}>
                    <MapMarker position={{ lat: 37.5138, lng: 127.023012 }}>
                        <div style={{ color: "#000" }}>사부작 스튜디오</div>
                    </MapMarker>
                </Map>
            )}
        </Box>
    );
}
