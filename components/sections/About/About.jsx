"use client";

import React from "react";
import styles from "./about.module.css";
import { BlurryButton } from "@/components/ui";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className={styles.about}>
      <BlurryButton label="🧐 About me " />
      <div className={styles.about_content}>
        <div className={styles.p}>
          <p>
            👋 Me chamo Washington Henrique Fernandes de Sousa, mas pode me
            chamar apenas de Henrique. Prazer!
          </p>
          <p>
            👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com
            JavaScript, React JS e Typescript.
          </p>
          <p>
            🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de
            São José dos Campos
          </p>
          <p>
            💡 Interesses em desenvolvimento Front-end com React, React Native,
            VueJS e UX/UI Design.
          </p>
          <p>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
