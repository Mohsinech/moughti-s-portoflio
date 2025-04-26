'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from "./marque.module.css";

const SectionDivider = ({ text }) => {
  return (
    <div className={styles.container}>
      
      {/* Back Layer */}
      <div className={styles.backMarquee}>
        <Marquee gradient={false} speed={50}>
          <h1>Freelancer • Engineer • Dreamer • Creator •</h1>
        </Marquee>
      </div>

      {/* Front Layer */}
      <div className={styles.frontMarquee}>
        <Marquee gradient={true} gradientColor="#00000051" gradientWidth={50} speed={60}>
          <h1>Freelancer • Engineer • Dreamer • Creator •</h1>
        </Marquee>
      </div>

      {/* Rocket */}
      <div className={styles.rocket}>
        <span className="material-symbols-outlined">rocket</span>
      </div>

    </div>
  );
};

export default SectionDivider;
