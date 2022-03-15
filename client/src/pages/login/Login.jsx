import React, { useContext, useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import styles from './Login.module.css';
import { CircularProgress } from '@mui/material';

const Login = (props) => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

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
          <form className={styles.loginBox} onSubmit={handleClick}>
            <input
              placeholder='Email'
              required
              type='email'
              className={styles.loginInput}
              ref={email}
            />
            <input
              placeholder='Password'
              required
              type='password'
              minLength='6'
              className={styles.loginInput}
              ref={password}
            />
            <button className={styles.loginButton} disabled={isFetching}>
              {isFetching ? <CircularProgress /> : 'Log In'}
            </button>
            <span className={styles.loginForgot}>Forgot Password</span>
            <button className={styles.loginRegisterButton}>
              {isFetching ? <CircularProgress /> : 'Create a New Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
