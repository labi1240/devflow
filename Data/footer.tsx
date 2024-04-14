import type { NextPage } from "next";
import SubFooter from "./frame-component2";
import FrameComponent from "./frame-component";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <SubFooter />
      <FrameComponent />
    </footer>
  );
};

export default Footer;
