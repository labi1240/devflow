import type { NextPage } from "next";
import styles from "./mini-slider.module.css";

const MiniSlider: NextPage = () => {
  return (
    <div className={styles.closure}>
      <b className={styles.restParameter}>
        <span>01</span>
        <span className={styles.span}>/05</span>
      </b>
      <div className={styles.wrapperSlider}>
        <img className={styles.sliderIcon} alt="" src="/slider-1.svg" />
      </div>
      <div className={styles.destructuringAssignment}>
        <div className={styles.templateLiterals}>
          <img
            className={styles.arrowForwardIosIcon}
            alt=""
            src="/arrow-forward-ios.svg"
          />
        </div>
        <div className={styles.dataCollector}>
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

export default MiniSlider;
