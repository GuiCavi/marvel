import PropTypes from 'prop-types';
import React from 'react';

import '../../theme/_theme.sass'; // this is for the general css
import styles from './Input.module.sass'; // this is for the specific component css

const Input = ({ icon, ...props }) => (
  <>
    <label htmlFor="search" className="input-label">
      Nome do personagem
    </label>

    <div className={styles.inputWrapper}>
      <input type="text" id="search" className={styles.input} placeholder="Search" {...props} />

      {icon}
    </div>
  </>
);

Input.propTypes = {
  icon: PropTypes.element,
};

Input.defaultProps = {
  icon: undefined,
};

export default Input;
