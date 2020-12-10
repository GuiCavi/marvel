import PropTypes from 'prop-types';
import React from 'react';

import styles from './Pagination.module.sass';

const PaginationButton = ({
  controls, active, children, onClick,
}) => {
  let className;

  if (active) className = styles.active;
  else if (controls) className = styles.controls;

  return (
    <li
      onClick={onClick}
      className={className}
    >
      <span>{children}</span>
    </li>
  );
};

PaginationButton.propTypes = {
  children: PropTypes.element,
  active: PropTypes.bool,
  controls: PropTypes.bool,
  onClick: PropTypes.func,
};

PaginationButton.defaultProps = {
  active: false,
  controls: false,
  children: undefined,
  onClick: () => { },
};

export default PaginationButton;
