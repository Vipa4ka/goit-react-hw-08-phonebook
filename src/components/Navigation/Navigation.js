import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.Navigationlink}
      activeClassName={styles.NavigationActiveLink}
    >
      HOME
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={styles.Navigationlink}
      activeClassName={styles.NavigationActiveLink}
    >
      CONTACTS
    </NavLink>
  </nav>
);

export default Navigation;
