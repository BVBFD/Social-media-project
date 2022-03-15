import React from 'react';
import styles from './CloseFriend.module.css';

const CloseFriend = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className={styles.sidebarFriend}>
      <img className={styles.sidebarFriendImg} src={PF + user.profilePicture} />
      <span className={styles.sidebarFriendName}>{user.username}</span>
    </li>
  );
};

export default CloseFriend;
