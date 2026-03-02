import React from 'react';
import styles from './Members.module.css';

const MembersPage = () => {
  const members = [
    {
      name: '[Member Name]',
      role: 'President',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: '[Member Name]',
      role: 'Vice President',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: '[Member Name]',
      role: 'Secretary',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Members</h1>
      <div className={styles.membersGrid}>
        {members.map((member, index) => (
          <div key={index} className={styles.memberCard}>
            <img
              src={member.imageUrl}
              alt={member.name}
            />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersPage;
