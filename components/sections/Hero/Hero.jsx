"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";
import { BlurryButton } from "@/components/ui";
import { motion } from "framer-motion";
import { socialData } from "@/constants/data";
import Link from "next/link";
import GalaxyBackground from "@/components/effects/GalaxyBackground";

const Hero = () => {
  const handRef = useRef(null);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Move waving hand
      if (handRef.current) {
        handRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }

      // Add trail
      setTrail((prev) => {
        const newTrail = [...prev, { x: clientX, y: clientY }];
        if (newTrail.length > 15) newTrail.shift(); // limit trail length
        return newTrail;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <GalaxyBackground />
      <section className={styles.hero}>
        {/* Floating waving hand */}
        <div
          ref={handRef}
          style={{
            fontSize: "2.5rem",
            position: "fixed",
            left: 0,
            top: 0,
            pointerEvents: "none",
            zIndex: 1000,
            transform: "translate(-50%, -50%)",
            transition: "transform 0.05s linear",
          }}
        >
          👋
        </div>

        {/* Trail elements */}
        {trail.map((point, index) => (
          <div
            key={index}
            style={{
              position: "fixed",
              left: point.x,
              top: point.y,
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "rgba(0,0,0,0.1)",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 999,
            }}
          />
        ))}

        <div className={styles.content}>
          <BlurryButton label="👋 Hello" />
          <div className={styles.titles}>
            <motion.h1>Abdelmoughite</motion.h1>
            <motion.h1>Naoumi</motion.h1>
          </div>
          <div className={styles.career}>
            <h2>CyberSecurity — Cloud Computing</h2>
            <h3>Building Secure & Scalable Systems</h3>
          </div>
          <div className={styles.socials}>
            {socialData.map((social) => (
              <Link href={social.href} key={social.id}>
                <img src={social.icon} alt={social.name} />
              </Link>
            ))}
          </div>

          <div className={styles.quick}>
            <h2>Quick Access paths</h2>
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

        <div className={styles.heroImage}>
          <img src="/assets/images/me.png" alt="hero" />
        </div>
      </section>
    </>
  );
};

export default Hero;
