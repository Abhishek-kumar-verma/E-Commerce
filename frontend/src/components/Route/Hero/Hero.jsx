import React from "react";
import styles from "../../../styles/style";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[500] text-[#000000ba]">
          Experience the joy of online shopping with our e-commerce website.{" "}
           Start exploring < br /> our vast collection today and unlock a world of
          endless possibilities from the <br /> comfort of your own home.
          Happy shopping!
        </p>
        <Link to="/products" className={`${styles.button} mt-5`}>
          <span className="text-[#fff] font-Poppins text-[18px]">
            {" "}
            Show Now{" "}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
