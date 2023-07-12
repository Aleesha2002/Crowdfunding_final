import React from "react";
import styles from "../style";
import Button from "./Button";
import {Link} from "react-router-dom";

const CTA = () => {
  return (
    <scetion
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>Let's try our services now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[#ededed]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
     <Link to="/login" className="link">
            <Button />
          </Link>
      </div>
    </scetion>
  );
};

export default CTA;
