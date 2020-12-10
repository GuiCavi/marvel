import PropTypes from 'prop-types';
import React from 'react';

import { Logo } from '../Logo';
import styles from './Header.module.sass';

const Header = ({ user }) => (
  <header className={styles['main-header']}>
    <Logo className={styles.logo} />

    <div className={styles['person-details']}>
      <div className={styles['person-info']}>
        <span className="bold">{user.name}</span>
        <span>{user.role}</span>
      </div>

      <div className={styles.avatar}>
        <span className="bold">CB</span>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
