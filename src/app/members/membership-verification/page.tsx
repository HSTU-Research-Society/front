import React from 'react';
import styles from './MembershipVerification.module.css';

const MembershipVerificationPage = () => {
  return (
    <div className={styles.container}>
      <h1>Membership Verification</h1>
      <p>Enter your membership number below to verify your status.</p>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Enter your membership number"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Verify
        </button>
      </form>
    </div>
  );
};

export default MembershipVerificationPage;
