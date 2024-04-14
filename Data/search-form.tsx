import type { NextPage } from "next";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import LargeButton from "./large-button";
import styles from "./search-form.module.css";

const SearchForm: NextPage = () => {
  return (
    <div className={styles.form}>
      <div className={styles.textParent}>
        <div className={styles.text}>
          <div className={styles.destination}>Destination</div>
          <FormControl
            className={styles.text1}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "100%",
              height: "24px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "24px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "24px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#201f21",
                fontSize: 16,
                fontWeight: "Bold",
                fontFamily: "Plus Jakarta Sans",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="16px" height="24px" src="/icon.svg" style={{}} />
              )}
            >
              <MenuItem>Green Land</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <img className={styles.frameChild} alt="" src="/vector-2.svg" />
        <div className={styles.text2}>
          <div className={styles.averagePrice}>Average Price</div>
          <FormControl
            className={styles.text3}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "100%",
              height: "24px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "24px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "24px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#201f21",
                fontSize: 16,
                fontWeight: "Bold",
                fontFamily: "Plus Jakarta Sans",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="16px"
                  height="24px"
                  src="/icon-1.svg"
                  style={{ marginRight: "0.0999999999994543px" }}
                />
              )}
            >
              <MenuItem>$300 - $400</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <img className={styles.frameItem} alt="" src="/vector-2-1.svg" />
        <div className={styles.text4}>
          <div className={styles.date}>Date</div>
          <FormControl
            className={styles.text5}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "100%",
              height: "24px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "24px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "24px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#201f21",
                fontSize: 16,
                fontWeight: "Bold",
                fontFamily: "Plus Jakarta Sans",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="16px" height="24px" src="/icon-2.svg" style={{}} />
              )}
            >
              <MenuItem>23 Mey 2022</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
      <LargeButton />
    </div>
  );
};

export default SearchForm;
