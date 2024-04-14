import type { NextPage } from "next";
import SearchForm from "./search-form";
import styles from "./frame-component5.module.css";

const FrameComponent5: NextPage = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        <div className={styles.titlr}>
          <h1 className={styles.exploreTheBeautiful}>
            Explore The Beautiful World
          </h1>
          <div className={styles.travelingIsAbout}>
            Traveling is about finding those things you never knew you were
            looking for.
          </div>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

export default FrameComponent5;
