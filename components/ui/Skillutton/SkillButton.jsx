import React from "react";
import styles from "./skill.module.css";

const SkillButton = ({ skill, onClick }) => {
  return (
    <button className={styles.skill_btn} onClick={onClick}>
      <span>{!skill ? "Button" : skill}</span>
    </button>
  );
};

export default SkillButton;
