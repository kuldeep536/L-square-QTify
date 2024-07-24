import React from "react";
import styles from "./Hero.module.css";
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
          src={require("../../assets/headphones.png")}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
