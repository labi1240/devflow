import type { NextPage } from "next";
import ThirdMidSection from "./lot-of-choice";
import styles from "./benefits-area.module.css";

const BenefitsArea: NextPage = () => {
  return (
    <section className={styles.benefitChooseOurWrapper}>
      <div className={styles.benefitChooseOur}>
        <h1 className={styles.benefitChooseOur1}>Benefit Choose our</h1>
        <div className={styles.benefits}>
          <ThirdMidSection
            world="/world@2x.png"
            lotOfChoice="Lot Of choice"
            weOfferAPlethoraOfOptions="We offer a plethora of options to cater to your wanderlust"
          />
          <ThirdMidSection
            world="/menu-book.svg"
            lotOfChoice="Best Tour Guide"
            weOfferAPlethoraOfOptions="We offer a plethora of options to cater to your wanderlust"
            propPadding="32px"
            propOverflow="hidden"
            propTextTransform="unset"
          />
          <ThirdMidSection
            world="/local-atm.svg"
            lotOfChoice="Easy Booking"
            weOfferAPlethoraOfOptions="We want you journey is easy"
            propPadding="var(--padding-25xl-5) var(--padding-13xl)"
            propOverflow="hidden"
            propTextTransform="unset"
          />
          <ThirdMidSection
            world="/bolt.svg"
            lotOfChoice="fast Respon"
            weOfferAPlethoraOfOptions="We are very fast respon for your questions"
            propPadding="32px"
            propOverflow="hidden"
            propTextTransform="capitalize"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsArea;
