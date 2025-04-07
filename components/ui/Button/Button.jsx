import React from "react";
import styles from "./button.module.css";

const Button = ({ label }) => {
  return (
    <div className={styles.button} data-tooltip="Size: 5Mb">
      <div className={styles.buttonWrapper}>
        <div className={styles.text}>{!label ? "anything" : label}</div>
        <span className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2em"
            height="2em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Button;
