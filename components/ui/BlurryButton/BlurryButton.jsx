import React from "react";
import styles from "./blurry.module.css";

const BlurryButton = ({ label }) => {
  return (
    <button className={styles.blurryButton}>{!label ? "Button" : label}</button>
  );
};

export default BlurryButton;
