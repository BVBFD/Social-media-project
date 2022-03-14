import React from 'react';
import styles from './Register.module.css';

const Register = (props) => {
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.loginLogo}>MrLee Social</h3>
          <span className={styles.loginDesc}>
            Connect with friends and the world around you on MrLee Social
          </span>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginBox}>
            <input placeholder='Username' className={styles.loginInput} />
            <input placeholder='Email' className={styles.loginInput} />
            <input placeholder='Password' className={styles.loginInput} />
            <input placeholder='Password Again' className={styles.loginInput} />
            <button className={styles.loginButton}>Sign Up</button>
            <button className={styles.loginRegisterButton}>
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
