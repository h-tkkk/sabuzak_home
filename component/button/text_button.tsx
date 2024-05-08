import { Box, Button, Typography } from "@mui/material";

interface TextButtonProps {
    text: string;
}

export default function TextButton(props: TextButtonProps) {
    return (
        <Box>
            <Button style={{ textTransform: "none" }}>
                <Typography color={"#000"}>{props.text}</Typography>
            </Button>
        </Box>
    );
}
