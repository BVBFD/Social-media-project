import React from 'react';
import styles from './CloseFriend.module.css';

const CloseFriend = ({ user }) => {
  return (
    <li className={styles.sidebarFriend}>
      <img className={styles.sidebarFriendImg} src={user.profilePicture} />
      <span className={styles.sidebarFriendName}>{user.username}</span>
    </li>
  );
};

export default CloseFriend;
