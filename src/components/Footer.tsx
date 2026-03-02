import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} HSTU Research Society. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
