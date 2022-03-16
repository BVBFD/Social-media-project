import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchPosts();
  }, []);

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
                src={user.coverPicture || PF + 'person/noCover.png'}
                crossOrigin='anonymous'
              />
              <img
                className={styles.profileUserImg}
                src={user.profilePicture || PF + `person/noAvatar.png`}
                crossOrigin='anonymous'
              />
            </div>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileInfoName}>{user.username}</h4>
              <span className={styles.profileInfoDesc}>{user.desc}</span>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
