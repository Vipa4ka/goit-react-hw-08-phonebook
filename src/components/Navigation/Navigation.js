import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { authSelectors } from '../../redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.Navigationlink}
        activeClassName={styles.NavigationActiveLink}
      >
        HOME
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.Navigationlink}
          activeClassName={styles.NavigationActiveLink}
        >
          CONTACTS
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
