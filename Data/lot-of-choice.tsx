import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./lot-of-choice.module.css";

export type ThirdMidSectionType = {
  world?: string;
  lotOfChoice?: string;
  weOfferAPlethoraOfOptions?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propOverflow?: CSSProperties["overflow"];
  propTextTransform?: CSSProperties["textTransform"];
};

const ThirdMidSection: NextPage<ThirdMidSectionType> = ({
  world,
  lotOfChoice,
  weOfferAPlethoraOfOptions,
  propPadding,
  propOverflow,
  propTextTransform,
}) => {
  const lotOfChoiceStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const worldIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const lotOfChoice1Style: CSSProperties = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  return (
    <div className={styles.lotOfChoice} style={lotOfChoiceStyle}>
      <img
        className={styles.worldIcon}
        loading="lazy"
        alt=""
        src={world}
        style={worldIconStyle}
      />
      <div className={styles.lotOfChoiceParent}>
        <div className={styles.lotOfChoice1} style={lotOfChoice1Style}>
          {lotOfChoice}
        </div>
        <div className={styles.weOfferA}>{weOfferAPlethoraOfOptions}</div>
      </div>
    </div>
  );
};

export default ThirdMidSection;
