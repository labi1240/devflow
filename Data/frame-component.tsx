import type { NextPage } from "next";
import FooterContactIcon from "./frame-component1";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.lineParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <FooterContactIcon whatsapp="/whatsapp.svg" />
          <FooterContactIcon whatsapp="/call.svg" />
          <FooterContactIcon whatsapp="/mail-outline.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
