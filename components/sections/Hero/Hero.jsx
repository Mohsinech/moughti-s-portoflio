"use client";
import { createAnimatable, utils } from 'animejs';
import React from "react";
import styles from "./hero.module.css";
import { BlurryButton } from "@/components/ui";
import { motion } from "framer-motion";
import { socialData } from "@/constants/data";
import Link from "next/link";


const Hero = () => {
  return (
    <section className={styles.hero}>
              <div className="waving-hand" style={{ fontSize: "2.5rem", position: "absolute" }}>👋</div>
      <div className={styles.content}>
        <BlurryButton label="👋 Hello" />
        <div className={styles.titles}>
          <motion.h1>Abdelmoughite</motion.h1>
          <motion.h1>Naoumi</motion.h1>
        </div>
        <div className={styles.career}>
          <h2> CyberSecurity — Cloud Computing</h2>
          <h3>Building Secure & Scalable Systems</h3>
        </div>
        <div className={styles.socials}>
          {socialData.map((social) => (
            <Link href={social.href} key={social.id} >
              <img src={social.icon} alt={social.name} label={social.name}/>
            </Link>
          ))}
        </div>

        {/* Scroll to get easy reading */}
        <div className={styles.quick}>
          <h2>Quick Acces paths </h2>

          {/* Paths */}
          <ul>
            <li>
              <button>01/ About</button>
            </li>
            <li>
              <button>02/ Learning pathway</button>
            </li>
            <li>
              <button>03/ Certifications</button>
            </li>
            <li>
              <button>04/ Studies</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero */}
      <div className={styles.heroImage}>
        <img src="/assets/images/me.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
