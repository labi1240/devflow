import type { NextPage } from "next";
import styles from "./menu.module.css";

const Menu: NextPage = () => {
  return (
    <nav className={styles.homeParent}>
      <div className={styles.home}>home</div>
      <div className={styles.service}>{`Service `}</div>
      <div className={styles.gallery}>{`gallery `}</div>
      <div className={styles.visit}>visit</div>
      <div className={styles.blog}>Blog</div>
      <div className={styles.about}>ABOUT</div>
    </nav>
  );
};

export default Menu;
