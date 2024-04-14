import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./newsletter.module.css";

const Newsletter: NextPage = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.audioSaver}>
        <h1 className={styles.newsletterSignUp}>Newsletter Sign Up</h1>
        <div className={styles.weAlwaysReady}>
          We always ready 24 hours for you, Call me anything you want
        </div>
      </div>
      <div className={styles.linkValidator}>
        <TextField
          className={styles.form}
          placeholder="Input Email..."
          variant="outlined"
          InputProps={{
            endAdornment: <img width="21.4px" height="20px" src="/group.svg" />,
          }}
          sx={{
            "& fieldset": { borderColor: "#c4cfd4" },
            "& .MuiInputBase-root": {
              height: "64px",
              backgroundColor: "#fff",
              paddingRight: "25.800000000000185px",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "18px",
            },
            "& .MuiInputBase-input": { color: "#737373" },
          }}
        />
      </div>
    </section>
  );
};

export default Newsletter;
