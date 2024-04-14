import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./large-button.module.css";

const LargeButton: NextPage = () => {
  return (
    <Button
      className={styles.button}
      disableElevation={true}
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "16",
        background: "#3e51ff",
        borderRadius: "0px 0px 0px 0px",
        "&:hover": { background: "#3e51ff" },
        width: 143,
        height: 54,
      }}
    >
      Search
    </Button>
  );
};

export default LargeButton;
