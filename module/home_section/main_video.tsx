export default function MainVideo() {
    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1,
                outline: "none",
                border: "none",
            }}
        >
            <source src="/video/sabuzak_main.mp4" type="video/mp4" />
        </video>
    );
}
