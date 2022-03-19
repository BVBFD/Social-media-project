import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './ChatOnline.module.css';

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(`/users/friends/${currentId}`);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.chatOnline}>
      {onlineFriends.map((o) => (
        <div
          className={styles.chatOnlineFriend}
          onClick={() => {
            handleClick(o);
          }}
        >
          <div className={styles.chatOnlineImgContainer}>
            <img
              className={styles.chatOnlineImg}
              src={
                o?.profilePicture
                  ? `${process.env.REACT_APP_PUBLIC_FOLDER}${o.profilePicture}`
                  : `${process.env.REACT_APP_PUBLIC_FOLDER}person/noAvatar.png`
              }
              crossOrigin='anonymous'
            />
            <div className={styles.chatOnlineBadge}></div>
          </div>
          <span className={styles.chatOnlineName}>{o?.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
