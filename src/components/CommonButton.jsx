import { Button } from "@mui/material";
import { styled } from "@mui/system";

const CommonButton = styled(Button)({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    borderRadius: "15px",
    textTransform: "capitalize",
    padding: "0 2rem 0 2rem",
});

export default CommonButton;
