import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import styles from './Feed.module.css';
import axios from 'axios';

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get('/posts/timeline/622b5a3657716d222d3b96ab');
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
