import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface TextButtonProps {
    text: string;
}

export default function TextButton(props: TextButtonProps) {
    return (
        <Link href={props.text.toLowerCase()}>
            <Typography color={"#000"} fontSize={18} fontWeight={500}>
                {props.text}
            </Typography>
        </Link>
    );
}
