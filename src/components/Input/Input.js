import PropTypes from 'prop-types';
import React, { useState } from 'react';

import '../../theme/_theme.sass'; // this is for the general css
import styles from './Input.module.sass'; // this is for the specific component css

const Input = ({
  icon, label, onSubmit, ...props
}) => {
  const [text, setText] = useState('');

  return (
    <>
      <label htmlFor="search" className="input-label">
        {label}
      </label>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          id="search"
          className={styles.input}
          placeholder="Search"
          onKeyUp={(event) => {
            setText(event.target.value);
            if (event.key === 'Enter') onSubmit(text);
          }}
          {...props}
        />

        <div
          style={{ height: 16 }}
          onClick={() => onSubmit(text)}
        >
          {icon}
        </div>
      </div>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  onSubmit: PropTypes.func,
  icon: PropTypes.element,
};

Input.defaultProps = {
  label: '',
  onSubmit: () => {},
  icon: undefined,
};

export default Input;
