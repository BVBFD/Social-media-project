import React from 'react';
import styles from './Profile.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

const Profile = (props) => {
  return (
    <>
      <Topbar />
      <div className={styles.profile}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
              <img
                className={styles.profileCoverImg}
                src='../assets/post/3.jpeg'
              />
              <img
                className={styles.profileUserImg}
                src='../assets/person/7.jpeg'
              />
            </div>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileInfoName}>Seong Eun Lee</h4>
              <span className={styles.profileInfoDesc}>Hello my friend</span>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
