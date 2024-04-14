import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./single-card.module.css";

export type SingleCardType = {
  loremIpsumDolorSitAmetCon?: string;
  loremIpsumDolorSitAmetCon1?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const SingleCard: NextPage<SingleCardType> = ({
  loremIpsumDolorSitAmetCon,
  loremIpsumDolorSitAmetCon1,
  propMinWidth,
  propMinWidth1,
}) => {
  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const loremIpsumDolor1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.newDestination}>
      <textarea className={styles.exceptionHandling} rows={16} cols={16} />
      <div className={styles.tryCatchBlock}>
        <div className={styles.finallyBlock}>
          <div className={styles.lambdaExpression}>
            <div
              className={styles.loremIpsumDolor}
              style={loremIpsumDolorStyle}
            >
              {loremIpsumDolorSitAmetCon}
            </div>
            <div
              className={styles.loremIpsumDolor1}
              style={loremIpsumDolor1Style}
            >
              {loremIpsumDolorSitAmetCon1}
            </div>
          </div>
          <div className={styles.promiseHandler}>
            <div className={styles.loremIpsumDolor2}>$432</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
