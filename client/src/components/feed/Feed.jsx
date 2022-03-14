import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import styles from './Feed.module.css';
import { Posts } from '../../dummyData';

const Feed = (props) => {
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
