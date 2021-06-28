import React from 'react';
import logoImg from '../images/phonebook-logo.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginRight: 20,
    fontWeight: 700,
    fontSize: 64,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  logo: {
    width: 200,
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Phonebook</h1>
    <img style={styles.logo} src={logoImg} alt="" />
  </div>
);

export default HomeView;
