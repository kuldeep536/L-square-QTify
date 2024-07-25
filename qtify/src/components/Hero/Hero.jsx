import React from "react";
import styles from "./Hero.module.css";
import Url from "../../assets/headphones.png"
//import { colors } from "@mui/material";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={Url}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
