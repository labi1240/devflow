import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./frame-component3.module.css";

export type MidSectionType = {
  bestPopularDestinationInT?: string;
  unearthNewHorizonsEmbrace?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propLineHeight?: CSSProperties["lineHeight"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const MidSection: NextPage<MidSectionType> = ({
  bestPopularDestinationInT,
  unearthNewHorizonsEmbrace,
  propAlignSelf,
  propLineHeight,
  propColor,
  propColor1,
}) => {
  const bestPopularDestinationStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      lineHeight: propLineHeight,
      color: propColor,
    };
  }, [propAlignSelf, propLineHeight, propColor]);

  const unearthNewHorizonsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.imageHandlerParent}>
      <div className={styles.imageHandler}>
        <h1
          className={styles.bestPopularDestination}
          style={bestPopularDestinationStyle}
        >
          {bestPopularDestinationInT}
        </h1>
        <div
          className={styles.unearthNewHorizons}
          style={unearthNewHorizonsStyle}
        >
          {unearthNewHorizonsEmbrace}
        </div>
      </div>
      <Button
        className={styles.button}
        disableElevation={true}
        variant="contained"
        sx={{
          color: "#fff",
          fontSize: "14",
          background: "#3e51ff",
          borderRadius: "0px 0px 0px 0px",
          "&:hover": { background: "#3e51ff" },
          width: 121,
          height: 44,
        }}
      >
        See More
      </Button>
    </div>
  );
};

export default MidSection;
