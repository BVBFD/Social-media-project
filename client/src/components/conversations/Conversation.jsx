import React from 'react';
import styles from './Conversation.module.css';

const Conversation = (props) => {
  return (
    <div className={styles.conversation}>
      <img
        className={styles.conversationImg}
        src={`${process.env.REACT_APP_PUBLIC_FOLDER}person/1.jpeg`}
        crossOrigin='anonymous'
      />
      <span className={styles.conversationName}>Lee Seong Eun</span>
    </div>
  );
};

export default Conversation;
