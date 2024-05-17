import { list } from "@vercel/blob";

export default async function handler(req, res) {
    try {
        const { blobs } = await list({
            token: process.env.BLOB_READ_WRITE_TOKEN,
            prefix: "main_video-KpYfRoo96XkqI71fuX0CspciWqzc9C.mp4",
            limit: 1,
        });

        if (blobs.length > 0) {
            const videoUrl = blobs[0].url;
            res.status(200).json({ url: videoUrl });
        } else {
            res.status(404).json({ error: "Video not found" });
        }
    } catch (error) {
        console.error("Error fetching video:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
