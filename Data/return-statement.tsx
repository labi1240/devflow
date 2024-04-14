import type { NextPage } from "next";
import MidSection from "./frame-component3";
import SingleCard from "./single-card";
import MiniSlider from "./mini-slider";
import styles from "./return-statement.module.css";

const FindDestinationMain: NextPage = () => {
  return (
    <section className={styles.returnStatement}>
      <div className={styles.functionCall}>
        <MidSection
          bestPopularDestinationInT="Find Destination "
          unearthNewHorizonsEmbrace="Uncover the perfect destination for your next adventure. Whether it's a hidden gem, a bustling city, or a serene natural wonder, your ideal destination is waiting to be found."
          propAlignSelf="unset"
          propLineHeight="62px"
          propColor="#262626"
          propColor1="#737373"
        />
        <div className={styles.instanceInitialization}>
          <div className={styles.variableDeclaration}>
            <SingleCard
              loremIpsumDolorSitAmetCon="Borobudur"
              loremIpsumDolorSitAmetCon1="Indonesia"
            />
            <SingleCard
              loremIpsumDolorSitAmetCon="Aare"
              loremIpsumDolorSitAmetCon1="Swiss"
              propMinWidth="45px"
              propMinWidth1="49px"
            />
            <SingleCard
              loremIpsumDolorSitAmetCon="Guangzou"
              loremIpsumDolorSitAmetCon1="China"
              propMinWidth="99px"
              propMinWidth1="50px"
            />
            <SingleCard
              loremIpsumDolorSitAmetCon="Taj Mahal"
              loremIpsumDolorSitAmetCon1="India"
              propMinWidth="87px"
              propMinWidth1="42px"
            />
          </div>
          <MiniSlider />
        </div>
      </div>
    </section>
  );
};

export default FindDestinationMain;
