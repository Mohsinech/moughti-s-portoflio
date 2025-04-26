"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./marque.module.css";

const SectionDivider = ({ text }) => {
  return (
    <div className={styles.container}>
      {/* Back Layer */}
      <div className={styles.backMarquee}>
        <Marquee
          speed={100}
          style={{ height: "100%" }}
          gradient={true}
          gradientColor="rgb(147, 34, 212, .2)"
          gradientWidth={100}
        >
          81
          <h1>Freelancer • Engineer • Dreamer • Creator •</h1>
        </Marquee>
      </div>

      {/* Front Layer */}
      <div className={styles.frontMarquee}>
        <Marquee
          gradient={true}
          gradientColor="#00000051"
          gradientWidth={100}
          speed={60}
          style={{ height: "100%" }}
        >
          <h1>Freelancer </h1>
          <h1>•</h1>
          <h1>Engineer</h1>
          <h1>Dreamer</h1>
          <h1>•</h1>
          <h1>Creator</h1>
          <h1>•</h1>
        </Marquee>
      </div>
    </div>
  );
};

export default SectionDivider;
