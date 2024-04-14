import type { NextPage } from "next";
import MidSection from "./frame-component3";
import PopularCard from "./popular-card";
import ProgressionBar from "./progression-bar";
import styles from "./popular-destination.module.css";

const PopularDestination: NextPage = () => {
  return (
    <section className={styles.dataGathererWrapper}>
      <div className={styles.dataGatherer}>
        <MidSection
          bestPopularDestinationInT="Best Popular Destination in the world"
          unearthNewHorizonsEmbrace="Unearth new horizons, embrace diverse cultures, and discover the wonders of our magnificent planet. Venture beyond boundaries, as the world is your canvas, and every journey is a masterpiece waiting to be painted."
        />
        <div className={styles.popularDestination}>
          <PopularCard
            buckinghamPalace="Buckingham Palace"
            unitedKingdom="United Kingdom"
          />
          <PopularCard
            buckinghamPalace="Labuan Bajo"
            unitedKingdom="Indonesia"
            propPadding="unset"
            propWidth="173px"
            propMinWidth="84px"
          />
          <PopularCard
            buckinghamPalace="Capaddocia"
            unitedKingdom="Turkey"
            propPadding="unset"
            propWidth="173px"
            propMinWidth="56px"
          />
        </div>
        <ProgressionBar />
      </div>
    </section>
  );
};

export default PopularDestination;
