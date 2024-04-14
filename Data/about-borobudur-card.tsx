import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./about-borobudur-card.module.css";

export type LargeCardComponentType = {
  architecturalMarvel?: string;
  borobudurWasBuiltInThe9th?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
};

const LargeCardComponent: NextPage<LargeCardComponentType> = ({
  architecturalMarvel,
  borobudurWasBuiltInThe9th,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propPadding,
}) => {
  const aboutBorobudurCardStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.aboutBorobudurCard} style={aboutBorobudurCardStyle}>
      <div className={styles.dataMerger}>
        <div className={styles.linkOrganizer} />
        <div className={styles.valueChecker} />
      </div>
      <div className={styles.architecturalMarvelParent} style={frameDiv1Style}>
        <h1 className={styles.architecturalMarvel}>{architecturalMarvel}</h1>
        <div className={styles.borobudurWasBuilt}>
          {borobudurWasBuiltInThe9th}
        </div>
      </div>
    </div>
  );
};

export default LargeCardComponent;
