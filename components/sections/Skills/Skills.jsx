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
<<<<<<< HEAD
        <SkillButton skill="AWS" onClick={() => handleSkillClick("AWS")} />
        <SkillButton
          skill="DevSecOps"
          onClick={() => handleSkillClick("DevSecOps")}
        />
        <SkillButton
          skill="Web Security"
          onClick={() => handleSkillClick("websec")}
        />
        <SkillButton skill="Linux" onClick={() => handleSkillClick("Linux")} />
        <SkillButton
          skill="React & Next.js"
          onClick={() => handleSkillClick("reactnext")}
        />
        <SkillButton
          skill="Cloud-Native Apps"
          onClick={() => handleSkillClick("cloudnative")}
        />
        <SkillButton
          skill="Study Roadmap"
          onClick={() => handleSkillClick("studyplan")}
        />
        <SkillButton
          skill="AI in Cybersecurity"
          onClick={() => handleSkillClick("ai-cyber")}
        />
        <SkillButton
          skill="Industrial Security"
          onClick={() => handleSkillClick("industry4")}
        />
        <SkillButton
          skill="Offensive Labs"
          onClick={() => handleSkillClick("offensivelabs")}
        />
        <SkillButton
          skill="ERP Security (Odoo)"
          onClick={() => handleSkillClick("odooerp")}
        />
        <SkillButton
          skill="Certifications Path"
          onClick={() => handleSkillClick("certpath")}
        />
=======
      <SkillButton skill="AWS" onClick={() => handleSkillClick("AWS")} />
      <SkillButton skill="DevSecOps" onClick={() => handleSkillClick("DevSecOps")} />
      <SkillButton skill="Web Security" onClick={() => handleSkillClick("WebSec")} />
      <SkillButton skill="Linux" onClick={() => handleSkillClick("Linux")} />
      <SkillButton skill="React & Next.js" onClick={() => handleSkillClick("ReactNext")} />
      <SkillButton skill="Cloud-Native Apps" onClick={() => handleSkillClick("CloudNative")} />
      <SkillButton skill="Study Roadmap" onClick={() => handleSkillClick("StudyPlan")} />
      <SkillButton skill="AI in Cybersecurity" onClick={() => handleSkillClick("ai-cyber")} />
      <SkillButton skill="Industrial Security" onClick={() => handleSkillClick("industry4")} />
      <SkillButton skill="Offensive Labs" onClick={() => handleSkillClick("offensivelabs")} />
      <SkillButton skill="ERP Security (Odoo)" onClick={() => handleSkillClick("odooerp")} />
      <SkillButton skill="Certifications Path" onClick={() => handleSkillClick("certpath")} />
>>>>>>> 52d8f80f5fd4aa1448683eb806435c24cf416d62
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
