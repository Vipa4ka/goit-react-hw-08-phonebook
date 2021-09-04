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

    {/* <NavLink
      to="/todos"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Заметки
    </NavLink> */}
  </nav>
);

export default Navigation;
