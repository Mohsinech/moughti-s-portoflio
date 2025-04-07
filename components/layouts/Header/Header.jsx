"use client";

import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { Nav } from "./data";
import Button from "@/components/ui/Button/Button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <img src="/assets/images/logo.png" alt="Abdelmoughite naoumi" />
          </Link>
        </div>
        {/* Navbar */}
        <nav className={styles.nav}>
          <ul>
            {Nav.map((item, i) => (
              <li key={item.id}>
                <Link href={item.href} className={styles.navLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Download BUtton  */}
        <div className={styles.download_btn}>
          <a href="/assets/files/cv.pdf" download="cv.pdf">
            <Button label="Download CV" />
          </a>
        </div>
      </div>
    </header>
  );
};
