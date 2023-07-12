import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] "
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white___gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bttom-0 rounded-full pink___gradient " />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[#ededed]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer "
          />
          <img
            src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain cursor-pointer "
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
