import React from 'react';
import styles from './Message.module.css';
import { format } from 'timeago.js';

const Message = ({ message, own }) => {
  return (
    <div
      className={own ? [styles.message, styles.own].join(' ') : styles.message}
    >
      <div className={styles.messageTop}>
        <img
          className={styles.messageImg}
          src={`${process.env.REACT_APP_PUBLIC_FOLDER}person/1.jpeg`}
          crossOrigin='anonymous'
        />
        <p className={styles.messageText}>{message.text}</p>
      </div>
      <div className={styles.messageBottom}>{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
