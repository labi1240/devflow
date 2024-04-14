import type { NextPage } from "next";
import styles from "./progression-bar.module.css";

const ProgressionBar: NextPage = () => {
  return (
    <div className={styles.progressionBar}>
      <b className={styles.ifStatement}>
        <span>01</span>
        <span className={styles.span}>/05</span>
      </b>
      <img
        className={styles.sliderIcon}
        loading="lazy"
        alt=""
        src="/slider.svg"
      />
      <div className={styles.switchCase}>
        <div className={styles.forLoop}>
          <img
            className={styles.arrowForwardIosIcon}
            loading="lazy"
            alt=""
            src="/arrow-forward-ios.svg"
          />
        </div>
        <div className={styles.doWhileLoop}>
          <img
            className={styles.arrowForwardIosIcon1}
            alt=""
            src="/arrow-forward-ios-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressionBar;
