"use client";

import React from "react";
import styles from "./about.module.css";
import { BlurryButton } from "@/components/ui";
import { motion } from "framer-motion";
import GalaxyBackground from "@/components/effects/GalaxyBackground";
import SectionDivider from "@/components/effects/marquee/SectionDivider";

const About = () => {
  return (
    <>
      <GalaxyBackground />
      <section className={styles.about}>
        <div className="flex p-2">
          <div className={styles.left}>
            <div className={styles.abimage}>
              <img src="/assets/images/aboutMe.png" alt="me" />
            </div>
          </div>

          <div className={styles.right}>
            <BlurryButton label="🧐 About me " />
            <div className={styles.about_content}>
              <div className={styles.p}>
                <p>👋 Hi there!</p>
                <p>
                  💼 I'm an aspiring cybersecurity engineer with a strong
                  foundation in cloud and digital trust.
                </p>
                <p>
                  🧠 Passionate about solving complex problems through
                  innovative tech solutions.
                </p>
                <p>
                  📈 Focused on performance optimization, system resilience, and
                  secure architecture.
                </p>
                <p>
                  🎯 Goal-driven, adaptable, and committed to continuous
                  professional growth.
                </p>
                <p>
                  📚 Currently pursuing advanced certifications to deepen
                  expertise and expand impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider />
      </section>
    </>
  );
};

export default About;
