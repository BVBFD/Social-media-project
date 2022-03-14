import React from 'react';
import styles from './Rightbar.module.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = (props) => {
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
        <div className={styles.birthdayContainer}>
          <img className={styles.birthdayImg} src='../assets/gift.png' />
          <span className={styles.birthdayText}>
            <b>Pola Foster</b> and <b> 3 other friends </b> have a birthday
            today
          </span>
        </div>
        <img className={styles.rightbarAd} src='../assets/ad.png' alt='' />
        <h4 className={styles.rightbarTitle}>Online Friends</h4>
        <ul className={styles.rightbarFriendList}>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
