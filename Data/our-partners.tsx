import type { NextPage } from "next";
import styles from "./our-partners.module.css";

const OurPartners: NextPage = () => {
  return (
    <div className={styles.ourPartners}>
      <div className={styles.ourPartnersHeader}>
        <h3 className={styles.ourPartners1}>Our Partners</h3>
        <div className={styles.weWorkWith}>
          We work with the best company all over the world.
        </div>
      </div>
      <div className={styles.partners}>
        <div className={styles.fictionalCompanyLogostartup}>
          <img className={styles.markIcon} alt="" src="/mark@2x.png" />
          <img
            className={styles.starsupIcon}
            loading="lazy"
            alt=""
            src="/starsup.svg"
          />
        </div>
        <div className={styles.fictionalCompanyLogooverlay}>
          <img className={styles.markIcon1} alt="" src="/mark-1@2x.png" />
          <img
            className={styles.overlaysIcon}
            loading="lazy"
            alt=""
            src="/overlays.svg"
          />
        </div>
        <div className={styles.fictionalCompanyLogoteamtal}>
          <img className={styles.markIcon2} alt="" src="/mark-2@2x.png" />
          <img
            className={styles.teamtalkIcon}
            loading="lazy"
            alt=""
            src="/teamtalk.svg"
          />
        </div>
        <div className={styles.fictionalCompanyLogopayscal}>
          <img className={styles.markIcon3} alt="" src="/mark-3@2x.png" />
          <img
            className={styles.payscaleIcon}
            loading="lazy"
            alt=""
            src="/payscale.svg"
          />
        </div>
        <div className={styles.fictionalCompanyLogoexdone}>
          <img className={styles.markIcon4} alt="" src="/mark-4.svg" />
          <img
            className={styles.exdoneIcon}
            loading="lazy"
            alt=""
            src="/exdone.svg"
          />
        </div>
        <div className={styles.fictionalCompanyLogobestban}>
          <img className={styles.markIcon5} alt="" src="/mark-5.svg" />
          <b className={styles.logotype}>BestBank</b>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
