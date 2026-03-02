import React from 'react';
import styles from './Events.module.css';

const EventsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Events</h1>
      <div className={styles.eventsGrid}>
        <div className={styles.eventCard}>
          <h2>Upcoming Event 1</h2>
          <p>Date: [Date]</p>
          <p>Join us for an exciting workshop on [Topic].</p>
        </div>
        <div className={styles.eventCard}>
          <h2>Past Event 1</h2>
          <p>Date: [Date]</p>
          <p>We hosted a successful seminar on [Topic].</p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
