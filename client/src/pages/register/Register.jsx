import React, { useRef } from 'react';
import styles from './Register.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      console.log(password.current.value);
      console.log(passwordAgain.current.value);
      passwordAgain.current.setCustomValidity("Password don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

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
              placeholder='Username'
              required
              ref={username}
              className={styles.loginInput}
              type='text'
            />
            <input
              placeholder='Email'
              required
              ref={email}
              className={styles.loginInput}
              type='email'
            />
            <input
              placeholder='Password'
              required
              ref={password}
              className={styles.loginInput}
              type='password'
              minLength='6'
            />
            <input
              placeholder='Password Again'
              required
              ref={passwordAgain}
              className={styles.loginInput}
              type='password'
            />
            <button className={styles.loginButton} type='submit'>
              Sign Up
            </button>
            <button className={styles.loginRegisterButton}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
