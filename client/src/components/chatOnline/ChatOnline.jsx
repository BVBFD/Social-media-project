import React from 'react';
import styles from './ChatOnline.module.css';

const ChatOnline = (props) => {
  return (
    <div className={styles.chatOnline}>
      <div className={styles.chatOnlineFriend}>
        <div className={styles.chatOnlineImgContainer}>
          <img
            className={styles.chatOnlineImg}
            src={`${process.env.REACT_APP_PUBLIC_FOLDER}person/1.jpeg`}
            crossOrigin='anonymous'
          />
          <div className={styles.chatOnlineBadge}></div>
        </div>
        <span className={styles.chatOnlineName}>Lee Seong Eun</span>
      </div>
    </div>
  );
};

export default ChatOnline;
