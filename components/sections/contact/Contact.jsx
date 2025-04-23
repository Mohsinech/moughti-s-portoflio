import React from "react";
import styles from "./contact.module.css";
import { BlurryButton } from "@/components/ui";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.first_pj}>
        <BlurryButton label="🧐 Contact me " />
      </div>
    </div>
  );
};

export default Contact;
