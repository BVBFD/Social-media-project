import React, { useContext } from 'react';
import styles from './Topbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Topbar = (props) => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <span className={styles.logo}>Mr.Lee Social</span>
        </Link>
      </div>
      <div className={styles.topbarCenter}>
        <div className={styles.searchBar}>
          <SearchIcon className={styles.searchIcon} />
          <input
            placeholder='Search for friend, post or video'
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.topbarLinks}>
          <span className={styles.topbarLink}>Homepage</span>
          <span className={styles.topbarLink}>Timeline</span>
        </div>
        <div className={styles.topbarIcons}>
          <div className={styles.topbarIconItem}>
            <PersonIcon />
            <span className={styles.topbarIconBadge}>1</span>
          </div>

          <div className={styles.topbarIconItem}>
            <ChatIcon />
            <span className={styles.topbarIconBadge}>2</span>
          </div>

          <div className={styles.topbarIconItem}>
            <NotificationsIcon />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            className={styles.topbarImg}
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
            crossOrigin='anonymous'
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
