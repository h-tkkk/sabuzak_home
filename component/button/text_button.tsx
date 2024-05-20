import { Box, Button, Typography } from "@mui/material";
import { observer } from "mobx-react";
import Link from "next/link";
import { useRootStores } from "../../rootStore/rootStore";

interface TextButtonProps {
    text: string;
}

const TextButton = observer((props: TextButtonProps) => {
    const rootStore = useRootStores();

    return (
        <Link href={props.text.toLowerCase()}>
            <Typography
                fontFamily={"Pretendard"}
                color={rootStore.sidebarOpen ? "#fff" : rootStore.mainScrollStatus ? "#000" : "#fff"}
                fontSize={18}
                fontWeight={400}
            >
                {props.text}
            </Typography>
        </Link>
    );
});

export default TextButton;
