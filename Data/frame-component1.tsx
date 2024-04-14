import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FooterContactIconType = {
  whatsapp?: string;
};

const FooterContactIcon: NextPage<FooterContactIconType> = ({ whatsapp }) => {
  return (
    <div className={styles.whatsappParent}>
      <img
        className={styles.whatsappIcon}
        loading="lazy"
        alt=""
        src={whatsapp}
      />
      <div className={styles.wrapper}>
        <div className={styles.div}> +1(721) 123 3251</div>
      </div>
    </div>
  );
};

export default FooterContactIcon;
