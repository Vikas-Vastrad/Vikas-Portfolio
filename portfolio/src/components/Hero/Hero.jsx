import React from "react";

import styles from "./Hero.module.css";
import heroImage2 from "../../../assets/hero/hero1Image.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vikas</h1>
        <p className={styles.description}>
        I am a Full-Stack Developer skilled in Java, Spring Boot, React.js, MySQL, Git, and API integration. Passionate about problem-solving and scalable applications, I seek a role to contribute and grow in a dynamic team.
        </p>
        <a href="mailto:vikasvastrad11@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage2}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
