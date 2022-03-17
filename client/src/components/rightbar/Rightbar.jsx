import React, { useContext, useEffect, useState } from 'react';
import styles from './Rightbar.module.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@mui/icons-material';

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?.id));
  }, [currentUser, user]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(`/users/friends/${user._id}`);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);

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

  const handleClick = async (event) => {
    console.log(event.target);
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className={styles.rightbarFollowButton} onClick={handleClick}>
            {followed ? `Unfollow` : 'Follow'}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
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
          {friends.map((friend) => {
            return (
              <Link
                to={`/profile/${friend.username}`}
                style={{ textDecoration: 'none' }}
              >
                <div className={styles.rightbarFollowing}>
                  <img
                    src={
                      friend.profilePicture
                        ? `${PF}${friend.profilePicture}`
                        : `${PF}person/noAvatar.png`
                    }
                    className={styles.rightbarFollowingImg}
                    crossOrigin='anonymous'
                  />
                  <span className={styles.rightbarFollowingName}>
                    {friend.username}
                  </span>
                </div>
              </Link>
            );
          })}
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
