import { MoreVert } from '@mui/icons-material';
import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img
              className={styles.postProfileImg}
              src='../assets/person/1.jpeg'
            />
            <span className={styles.postUsername}>Lee Seong Eun</span>
            <span className={styles.postDate}>5 mins ago</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>Hello ~ !, It's me here</span>
          <img className={styles.postImg} src='../assets/post/1.jpeg' />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img className={styles.likeIcon} src='../assets/like.png' alt='' />
            <img className={styles.likeIcon} src='../assets/heart.png' alt='' />
            <span className={styles.postLikeCounter}>32 people like it</span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
