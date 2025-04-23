import React from "react";
import styles from "./contact.module.css";
import { BlurryButton } from "@/components/ui";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.first_pj}>
        <BlurryButton label="🧐 Contact me " />
      </div>
      <div className={styles["form-container"]}>
        <form className={styles.form}>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email</label>
            <input required name="email" id="email" type="text" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="Subject">Subject</label>
            <input required name="Subject" id="Subject" type="text" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea
              required
              cols="50"
              rows="10"
              id="textarea"
              name="textarea"
            ></textarea>
          </div>
          <button type="submit" className={styles["form-submit-btn"]}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
