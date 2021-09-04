import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={styles.AuthNavlink}
      activeClassName={styles.AuthNavActiveLink}
    >
      SIGN IN
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.AuthNavlink}
      activeClassName={styles.AuthNavActiveLink}
    >
      LOGIN
    </NavLink>
  </div>
);

export default AuthNav;
