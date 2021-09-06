import React from 'react';
import styles from './views.module.css';

const HomeView = () => (
  <div className={styles.HomeViewContainer}>
    <p className={styles.HomeViewTitleP}>Welcome to </p>
    <h1 className={styles.HomeViewTitleH}>Phonebook</h1>
  </div>
);

export default HomeView;
