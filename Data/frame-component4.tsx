import type { NextPage } from "next";
import OurPartners from "./our-partners";
import styles from "./frame-component4.module.css";

const FrameComponent4: NextPage = () => {
  return (
    <section className={styles.ourPartnersWrapper}>
      <OurPartners />
    </section>
  );
};

export default FrameComponent4;
