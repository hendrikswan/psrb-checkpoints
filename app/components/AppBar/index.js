/**
*
* AppBar
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles.css';


function AppBar({ toggleDrawer, email, startLogin }) {
  const loginLink = email || (
    <div
      className={styles.loginButton}
      onClick={startLogin}
    >
      log in
    </div>
  );
  return (
    <div className={styles.appBar}>
      <div
        className={styles.iconButton}
        onClick={toggleDrawer}
      >
        <FontAwesome
          className={styles.icon}
          name="bars"
        />
      </div>
      <div
        className={styles.heading}
      >
        Coder daily
      </div>
      <div
        className={styles.linkContainer}
      >
        {loginLink}
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  startLogin: React.PropTypes.func.isRequired,
  email: React.PropTypes.string,
};

export default AppBar;
