import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;
