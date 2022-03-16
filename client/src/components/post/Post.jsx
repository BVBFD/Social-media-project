import { MoreVert } from '@mui/icons-material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styles from './Post.module.css';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  const likeHandler = () => {
    try {
      axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <Link to={`/profile/${user.username}`}>
              <img
                className={styles.postProfileImg}
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : PF + 'person/noAvatar.png'
                }
                crossOrigin='anonymous'
              />
            </Link>
            <span className={styles.postUsername}>{user.username}</span>
            <span className={styles.postDate}>{format(post.createdAt)}</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post?.desc}</span>
          <img
            className={styles.postImg}
            src={PF + post.img}
            crossOrigin='anonymous'
          />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img
              className={styles.likeIcon}
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=''
              crossOrigin='anonymous'
            />
            <img
              className={styles.likeIcon}
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=''
              crossOrigin='anonymous'
            />
            <span className={styles.postLikeCounter}>
              {like} people like it
            </span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
