"use client";

import React, { useState } from "react";
import styles from "./skill.module.css";
import { BlurryButton, SkillButton } from "@/components/ui";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div
        style={{
          padding: "2rem",
        }}
      >
        <BlurryButton label="🧐 My Skills " />
      </div>

      <div className={styles.skill_grid}>
        <Marquee pauseOnHover={true} speed={50} direction="right">
          <SkillButton skill="AWS" />
          <SkillButton skill="DevSecOps" />
          <SkillButton skill="Web Security" />
          <SkillButton skill="Linux" />
          <SkillButton skill="React & Next.js" />
          <SkillButton skill="Cloud-Native Apps" />
        </Marquee>

        <Marquee pauseOnHover={true} speed={50}>
          <SkillButton skill="Study Roadmap" />
          <SkillButton skill="AI in Cybersecurity" />
          <SkillButton skill="Industrial Security" />
          <SkillButton skill="Offensive Labs" />
          <SkillButton skill="ERP Security (Odoo)" />
          <SkillButton skill="Certifications Path" />
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
