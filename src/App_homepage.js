import React from "react";
import styles from "./style";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonial,
  Hero,
} from "./components";

const App_homepage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} ml-6 mr-6`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}  ml-6`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart} mr-6 ml-6`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonial />{" "}
          <Clients /> <CTA /> <Footer />
        </div>
      </div>
    </div>
  );
};

export default App_homepage;
