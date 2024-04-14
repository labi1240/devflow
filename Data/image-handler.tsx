import type { NextPage } from "next";
import MidSection from "./frame-component3";
import LargeCardComponent from "./about-borobudur-card";
import styles from "./image-handler.module.css";

const LargeCardMain: NextPage = () => {
  return (
    <section className={styles.imageHandler}>
      <div className={styles.audioAnalyzer}>
        <MidSection
          bestPopularDestinationInT="About the Super of borobudur"
          unearthNewHorizonsEmbrace="Unveil the wonders of the world's largest Buddhist temple, Borobudur. Immerse yourself in its rich history and intricate architecture. Book your Borobudur adventure today and let this ancient marvel captivate your soul."
          propAlignSelf="stretch"
          propLineHeight="110%"
          propColor="rgba(0, 0, 0, 0.8)"
          propColor1="#737373"
        />
        <div className={styles.audioTransformer}>
          <LargeCardComponent
            architecturalMarvel="Architectural Marvel"
            borobudurWasBuiltInThe9th="Borobudur was built in the 9th century during the Sailendra dynasty's rule"
          />
          <div className={styles.geometrySplitter}>
            <LargeCardComponent
              architecturalMarvel="Buddhist Symbolism"
              borobudurWasBuiltInThe9th="Borobudur is a representation of the Buddhist cosmology. "
              propFlex="unset"
              propMinWidth="unset"
              propAlignSelf="stretch"
              propPadding="0px 0px 0px 0px"
            />
          </div>
          <LargeCardComponent
            architecturalMarvel="Stupas and Statues"
            borobudurWasBuiltInThe9th="The temple complex features 72 stupas, each containing a statue of Buddha."
            propFlex="0.8113"
            propMinWidth="318px"
            propAlignSelf="unset"
            propPadding="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default LargeCardMain;
