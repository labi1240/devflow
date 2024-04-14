import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./testimonial-card.module.css";

export type TestimonialCardType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
};

const TestimonialCard: NextPage<TestimonialCardType> = ({
  propWidth,
  propMinWidth,
  propWidth1,
}) => {
  const loremIpsumDolor2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const loremIpsumDolor3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth1,
    };
  }, [propMinWidth, propWidth1]);

  return (
    <div className={styles.testimonialCard}>
      <div className={styles.imageFormatter}>
        <div className={styles.audioFormatter}>
          <div className={styles.geometryFormatter} />
          <div className={styles.loremIpsumDolor}>
            "One of the most remarkable moments was witnessing a traditional
            Balinese dance performance."
          </div>
        </div>
        <div className={styles.linkJoiner}>
          <b className={styles.loremIpsumDolor1} style={loremIpsumDolor2Style}>
            Brandon Williams
          </b>
          <div
            className={styles.loremIpsumDolor2}
            style={loremIpsumDolor3Style}
          >
            Bali, Indonesia
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
