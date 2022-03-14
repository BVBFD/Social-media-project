import { MoreVert } from '@mui/icons-material';
import React from 'react';
import styles from './Post.module.css';
import { Users } from '../../dummyData';

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img
              className={styles.postProfileImg}
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
            />
            <span className={styles.postUsername}>
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className={styles.postDate}>{post.date}</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post?.desc}</span>
          <img className={styles.postImg} src={post.photo} />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img className={styles.likeIcon} src='../assets/like.png' alt='' />
            <img className={styles.likeIcon} src='../assets/heart.png' alt='' />
            <span className={styles.postLikeCounter}>
              {post.like} people like it
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
