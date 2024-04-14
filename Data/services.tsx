import type { NextPage } from "next";
import styles from "./services.module.css";

const Services: NextPage = () => {
  return (
    <img
      className={styles.servicesIcon}
      loading="lazy"
      alt=""
      src="/services@2x.png"
    />
  );
};

export default Services;
