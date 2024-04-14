import type { NextPage } from "next";
import Navbar from "./navbar";
import FrameComponent5 from "./frame-component5";
import styles from "./header.module.css";

const Header: NextPage = () => {
  return (
    <section className={styles.header}>
      <div className={styles.imageBg} />
      <Navbar />
      <FrameComponent5 />
    </section>
  );
};

export default Header;
