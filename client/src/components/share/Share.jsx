import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';
import React from 'react';
import styles from './Share.module.css';

const Share = (props) => {
  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img
            className={styles.shareProfileImg}
            src='../assets/person/1.jpeg'
          />
          <input
            type='text'
            placeholder="What's in your mind Lee?"
            className={styles.shareInput}
          />
        </div>
        <hr className={styles.shareHr} />
        <div className={styles.shareBottom}>
          <div className={styles.shareOptions}>
            <div className={styles.shareOption}>
              <PermMedia htmlColor='tomato' className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Photo or Video</span>
            </div>

            <div className={styles.shareOption}>
              <Label htmlColor='blue' className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Tag</span>
            </div>

            <div className={styles.shareOption}>
              <Room htmlColor='green' className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Location</span>
            </div>

            <div className={styles.shareOption}>
              <EmojiEmotions
                htmlColor='goldenrod'
                className={styles.shareIcon}
              />
              <span className={styles.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={styles.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
