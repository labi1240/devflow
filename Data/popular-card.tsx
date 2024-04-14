import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import GalleryCard from "./gallery-card";
import styles from "./popular-card.module.css";

export type PopularCardType = {
  buckinghamPalace?: string;
  unitedKingdom?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const PopularCard: NextPage<PopularCardType> = ({
  buckinghamPalace,
  unitedKingdom,
  propPadding,
  propWidth,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  const unitedKingdomStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.popularCard}>
      <div className={styles.functionCreator}>
        <div className={styles.booleanOperator} />
        <GalleryCard />
      </div>
      <div className={styles.loopController}>
        <h1 className={styles.buckinghamPalace}>{buckinghamPalace}</h1>
        <div className={styles.inputReceiverParent} style={frameDivStyle}>
          <div className={styles.inputReceiver}>
            <img
              className={styles.locationOnIcon}
              loading="lazy"
              alt=""
              src="/location-on.svg"
            />
          </div>
          <div className={styles.unitedKingdom} style={unitedKingdomStyle}>
            {unitedKingdom}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
