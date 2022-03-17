import {
  Cancel,
  EmojiEmotions,
  Label,
  PermMedia,
  Room,
} from '@mui/icons-material';
import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from './Share.module.css';

const Share = (props) => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = `${Date.now()}${file.name}`;
      data.append('name', fileName);
      data.append('file', file);
      newPost.img = fileName;
      console.log(data.name, data.file);
      try {
        await axios.post('/upload', data);
      } catch (err) {}
    }
    try {
      await axios.post('/posts', newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img
            className={styles.shareProfileImg}
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
            crossOrigin='anonymous'
          />
          <input
            type='text'
            placeholder={"What's in your mind Lee?" + user.username + '?'}
            className={styles.shareInput}
            ref={desc}
          />
        </div>
        <hr className={styles.shareHr} />
        {file && (
          <div className={styles.shareImgContainer}>
            <img className={styles.shareImg} src={URL.createObjectURL(file)} />
            <Cancel
              className={styles.shareCancelingImg}
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <form className={styles.shareBottom} onSubmit={submitHandler}>
          <div className={styles.shareOptions}>
            <label htmlFor='file' className={styles.shareOption}>
              <PermMedia htmlColor='tomato' className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Photo or Video</span>
              <input
                style={{ display: 'none' }}
                type='file'
                id='file'
                accept='.png,.jpeg,.jpg'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <div className={styles.shareOption}>
              <Label htmlColor='blue' className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Tag</span>
            </div>

            <div className={styles.shareOption}>
              <Room htmlColor='green' className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Location</span>
            </div>

            <div className={styles.shareOption}>
              <EmojiEmotions
                htmlColor='goldenrod'
                className={styles.shareIcon}
              />
              <span className={styles.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={styles.shareButton} type='submit'>
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
