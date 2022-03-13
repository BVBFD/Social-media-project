import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import styles from './Feed.module.css';

const Feed = (props) => {
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
