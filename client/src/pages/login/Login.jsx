import React from 'react';
import styles from './Login.module.css';

const Login = (props) => {
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
            <input placeholder='Email' className={styles.loginInput} />
            <input placeholder='Password' className={styles.loginInput} />
            <button className={styles.loginButton}>Log In</button>
            <span className={styles.loginForgot}>Forgot Password</span>
            <button className={styles.loginRegisterButton}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
