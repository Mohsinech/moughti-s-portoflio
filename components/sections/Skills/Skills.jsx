"use client";

import React, { useState } from "react";
import styles from "./skill.module.css";
import { BlurryButton, SkillButton } from "@/components/ui";
import { skillsData } from "@/constants/data";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skillName) => {
    const clickedSkill = skillName.toLowerCase();
    setSelectedSkill((prev) => (prev === clickedSkill ? null : clickedSkill));
  };

  const selectedData = skillsData.find(
    (item) => item.preview === `#${selectedSkill}`
  );

  return (
    <section className={styles.skills}>
      <BlurryButton label="🧐 My Skills " />

      <div className={styles.skill_grid}>
      <SkillButton skill="AWS" onClick={() => handleSkillClick("AWS")} />
      <SkillButton skill="DevSecOps" onClick={() => handleSkillClick("DevSecOps")} />
      <SkillButton skill="Web Security" onClick={() => handleSkillClick("WebSecurity")} />
      <SkillButton skill="Linux" onClick={() => handleSkillClick("Linux")} />
      <SkillButton skill="React & Next.js" onClick={() => handleSkillClick("React&Next.js")} />
      <SkillButton skill="Cloud-Native Apps" onClick={() => handleSkillClick("Cloud-NativeApps")} />
      <SkillButton skill="Study Roadmap" onClick={() => handleSkillClick("StudyRoadmap")} />
      <SkillButton skill="AI in Cybersecurity" onClick={() => handleSkillClick("AIinCybersecurity")} />
      <SkillButton skill="Industrial Security" onClick={() => handleSkillClick("IndustrialSecurity")} />
      <SkillButton skill="Offensive Labs" onClick={() => handleSkillClick("OffensiveLabs")} />
      <SkillButton skill="ERP Security (Odoo)" onClick={() => handleSkillClick("ERPSecurity(Odoo)")} />
      <SkillButton skill="Certifications Path" onClick={() => handleSkillClick("CertificationsPath")} />
      </div>

      <AnimatePresence mode="wait">
        {selectedData && (
          <SkillData key={selectedData.id} data={selectedData} />
        )}
      </AnimatePresence>
    </section>
  );
};

const SkillData = ({ data }) => {
  return (
    <motion.div
      className={styles.skill_data}
      key={data.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <h2>{data.text}</h2>
      <button>
        <a href={data.preview}>{data.see || data.e}</a>
      </button>
    </motion.div>
  );
};

export default Skills;
