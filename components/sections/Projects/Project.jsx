import React from "react";
import styles from "./project.module.css";
import { BlurryButton } from "@/components/ui";

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.first_pj}>
        <BlurryButton label="🧐 My Projects" />
      </div>
    </div>
  );
};

export default Project;
