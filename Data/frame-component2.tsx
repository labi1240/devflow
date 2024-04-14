import type { NextPage } from "next";
import Logo from "./logo";
import Services from "./services";
import styles from "./frame-component2.module.css";

const SubFooter: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <Logo j1="/j1-1.svg" />
          <div className={styles.home}>
            Explore with Discovery World. We are your ultimate destination for
            unforgettable journeys
          </div>
        </div>
        <div className={styles.sosmed}>
          <img
            className={styles.facebookIcon}
            loading="lazy"
            alt=""
            src="/facebook.svg"
          />
          <img
            className={styles.twitterIcon}
            loading="lazy"
            alt=""
            src="/twitter.svg"
          />
          <img
            className={styles.instagramIcon}
            loading="lazy"
            alt=""
            src="/instagram.svg"
          />
          <img
            className={styles.pinterestIcon}
            loading="lazy"
            alt=""
            src="/pinterest.svg"
          />
        </div>
      </div>
      <div className={styles.servicesParent}>
        <Services />
        <img
          className={styles.infoIcon}
          loading="lazy"
          alt=""
          src="/info@2x.png"
        />
        <img
          className={styles.companyIcon}
          loading="lazy"
          alt=""
          src="/company@2x.png"
        />
      </div>
    </div>
  );
};

export default SubFooter;
