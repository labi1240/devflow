import type { NextPage } from "next";
import styles from "./logo.module.css";

export type LogoType = {
  j1?: string;
};

const Logo: NextPage<LogoType> = ({ j1 }) => {
  return (
    <div className={styles.j1Parent}>
      <img className={styles.j1Icon} alt="" src={j1} />
      <div className={styles.discoveryParent}>
        <b className={styles.discovery}>Discovery</b>
        <div className={styles.world}>World</div>
      </div>
    </div>
  );
};

export default Logo;
