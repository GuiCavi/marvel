import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Link.module.sass';

const Link = (props) => (
  <RouterLink className={styles['custom-link']} {...props} />
);

export default Link;
