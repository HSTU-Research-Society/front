import React from 'react';
import styles from './About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.text}>
        The HSTU Research Society was founded in [Year] with the mission of fostering a vibrant research culture among students at Hajee Mohammad Danesh Science and Technology University.
      </p>
      <h2 className={styles.subtitle}>Our Goals</h2>
      <ul className={styles.list}>
        <li>To promote research and innovation among students.</li>
        <li>To provide a platform for students to collaborate on research projects.</li>
        <li>To organize workshops, seminars, and competitions to enhance research skills.</li>
        <li>To connect students with faculty members and industry experts.</li>
      </ul>
    </div>
  );
};

export default AboutPage;
