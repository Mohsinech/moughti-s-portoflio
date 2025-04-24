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
      <SkillButton skill="Penetration Testing" />
      <SkillButton skill="Ethical Hacking" />
      <SkillButton skill="Metasploit" />
      <SkillButton skill="Privilege Escalation" />
      <SkillButton skill="Social Engineering" />
      <SkillButton skill="Vulnerability Assessment" />
      <SkillButton skill="OWASP Top 10" />
      <SkillButton skill="Wireshark" />
      <SkillButton skill="Nmap" />
      <SkillButton skill="Cryptography" />
      <SkillButton skill="Kerberos" />
      <SkillButton skill="IAM/IAG" />
      <SkillButton skill="GRC" />
      <SkillButton skill="Authentication Protocols" />
      <SkillButton skill="Digital Forensics" />
      <SkillButton skill="Incident Response" />
    </Marquee>

    <Marquee pauseOnHover={true} speed={50}>
      <SkillButton skill="Log Analysis" />
      <SkillButton skill="Security Auditing" />
      <SkillButton skill="Chain of Custody" />
      <SkillButton skill="System Administration" />
      <SkillButton skill="Linux/Unix" />
      <SkillButton skill="Firewall Configuration" />
      <SkillButton skill="Switching & Routing" />
      <SkillButton skill="Active Directory" />
      <SkillButton skill="DNS & DHCP" />
      <SkillButton skill="VPN Configuration" />
      <SkillButton skill="Monitoring & Logging" />
      <SkillButton skill="Networking" />
      <SkillButton skill="DCS (Distributed Control Systems)" />
      <SkillButton skill="ICS Security" />
      <SkillButton skill="Physical Security" />
    </Marquee>

    <Marquee pauseOnHover={true} speed={50} direction="right">
      <SkillButton skill="AWS" />
      <SkillButton skill="Disaster Recovery" />
      <SkillButton skill="High Availability" />
      <SkillButton skill="Cloud Cost Optimization" />
      <SkillButton skill="Infrastructure as Code (IaC)" />
      <SkillButton skill="Terraform" />
      <SkillButton skill="Cloud Monitoring" />
      <SkillButton skill="Cloud Security" />
      <SkillButton skill="Serverless Architecture" />
      <SkillButton skill="SQL" />
      <SkillButton skill="MongoDB" />
      <SkillButton skill="Python Automation" />
      <SkillButton skill="Bash Scripting" />
      <SkillButton skill="CI/CD Pipelines" />
      <SkillButton skill="Zero Trust Architecture" />
    </Marquee>
  </div>
    </section>
  );
};

export default Skills;
