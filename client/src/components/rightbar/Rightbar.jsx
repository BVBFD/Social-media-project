import React from 'react';
import styles from './Rightbar.module.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className={styles.birthdayContainer}>
          <img
            className={styles.birthdayImg}
            src={`${PF}gift.png`}
            crossOrigin='anonymous'
          />
          <span className={styles.birthdayText}>
            <b>Pola Foster</b> and <b> 3 other friends </b> have a birthday
            today
          </span>
        </div>
        <img
          className={styles.rightbarAd}
          src={`${PF}ad.png`}
          crossOrigin='anonymous'
        />
        <h4 className={styles.rightbarTitle}>Online Friends</h4>
        <ul className={styles.rightbarFriendList}>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className={styles.rightbarTitle}>User Infomation</h4>
        <div className={styles.rightbarInfo}>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>City:</span>
            <span className={styles.rightbarInfoValue}>{user.city}</span>
          </div>

          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>From:</span>
            <span className={styles.rightbarInfoValue}>{user.from}</span>
          </div>

          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>RelationShip:</span>
            <span className={styles.rightbarInfoValue}>
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'Married'
                : '-'}
            </span>
          </div>
        </div>
        <h4 className={styles.rightbarTitle}>User Friends</h4>
        <div className={styles.rightbarFollowings}>
          <div className={styles.rightbarFollowing}>
            <img
              src={`${PF}person/1.jpeg`}
              className={styles.rightbarFollowingImg}
              crossOrigin='anonymous'
            />
            <span className={styles.rightbarFollowingName}>John Carter</span>
          </div>

          <div className={styles.rightbarFollowing}>
            <img
              src={`${PF}person/2.jpeg`}
              className={styles.rightbarFollowingImg}
              crossOrigin='anonymous'
            />
            <span className={styles.rightbarFollowingName}>John Carter</span>
          </div>

          <div className={styles.rightbarFollowing}>
            <img
              src={`${PF}person/3.jpeg`}
              className={styles.rightbarFollowingImg}
              crossOrigin='anonymous'
            />
            <span className={styles.rightbarFollowingName}>John Carter</span>
          </div>

          <div className={styles.rightbarFollowing}>
            <img
              src={`${PF}person/4.jpeg`}
              className={styles.rightbarFollowingImg}
              crossOrigin='anonymous'
            />
            <span className={styles.rightbarFollowingName}>John Carter</span>
          </div>

          <div className={styles.rightbarFollowing}>
            <img
              src={`${PF}person/5.jpeg`}
              className={styles.rightbarFollowingImg}
              crossOrigin='anonymous'
            />
            <span className={styles.rightbarFollowingName}>John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
