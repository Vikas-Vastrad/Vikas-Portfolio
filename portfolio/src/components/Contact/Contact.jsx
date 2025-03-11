import React from "react";
import styles from "./Contact.module.css";
import githubImg from "../../../assets/contact/githubIcon.png";
import linkedinImg from "../../../assets/contact/linkedinIcon.png";
import emailImg from "../../../assets/contact/emailIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <p>+91-6366033669</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <img src={emailImg} alt="Email icon" />
          <a href="mailto:vikasvastrad11@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
        <img src={linkedinImg} alt="Linkedin icon" />
          <a href="https://www.linkedin.com/in/vikas-vastrad-dev">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={githubImg} alt="Github icon" />
          <a href="https://www.github.com/Vikas-Vastrad">Github</a>
        </li>
      </ul>
    </footer>
  );
};
