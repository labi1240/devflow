import type { NextPage } from "next";
import TestimonialCard from "./testimonial-card";
import styles from "./traveller-experience.module.css";

const TravellerExperience: NextPage = () => {
  return (
    <section className={styles.travellerExperience}>
      <h1 className={styles.travellerExperience1}>Traveller Experience</h1>
      <div className={styles.linkSorter}>
        <div className={styles.testimonialCard}>
          <TestimonialCard />
        </div>
        <div className={styles.testimonialCard1}>
          <TestimonialCard
            propWidth="unset"
            propMinWidth="111px"
            propWidth1="unset"
          />
        </div>
        <div className={styles.testimonialCard2}>
          <TestimonialCard
            propWidth="unset"
            propMinWidth="111px"
            propWidth1="unset"
          />
        </div>
        <div className={styles.testimonialCard3}>
          <TestimonialCard
            propWidth="143px"
            propMinWidth="unset"
            propWidth1="111px"
          />
        </div>
      </div>
    </section>
  );
};

export default TravellerExperience;
