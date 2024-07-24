import React from "react";
import LogoImage from "../../assets/logo.png";
import Style from "./logo.module.css"
//import { styled } from "@mui/material";

export default function Logo() {
  return <img src={LogoImage} alt="logo" className={Style.CustomLogo} />;
}
