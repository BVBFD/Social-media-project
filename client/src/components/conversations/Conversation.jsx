import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Conversation.module.css';

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios(`/users?userId=${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className={styles.conversation}>
      <img
        className={styles.conversationImg}
        src={
          user.profilePicture
            ? `${process.env.REACT_APP_PUBLIC_FOLDER}${user.profilePicture}`
            : `${process.env.REACT_APP_PUBLIC_FOLDER}person/noAvatar.png`
        }
        crossOrigin='anonymous'
      />
      <span className={styles.conversationName}>{user?.username}</span>
    </div>
  );
};

export default Conversation;
