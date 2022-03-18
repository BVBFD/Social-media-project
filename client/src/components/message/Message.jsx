import React from 'react';
import styles from './Message.module.css';

const Message = ({ own }) => {
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
        <p className={styles.messageText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta veniam
          quisquam dignissimos amet maiores tenetur blanditiis iure, ipsam,
          facilis incidunt fugit nemo veritatis molestiae quaerat consectetur,
          optio totam eos. Illum.
        </p>
      </div>
      <div className={styles.messageBottom}>1 hour ago</div>
    </div>
  );
};

export default Message;
