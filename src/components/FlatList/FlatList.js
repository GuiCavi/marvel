import PropTypes from 'prop-types';
import React from 'react';

import styles from './FlatList.module.sass';

const FlatList = ({
  listHeader, data, renderItem, hideHeaders, ...props
}) => (
  <ul className={styles['flat-list']} {...props}>
    <header>
      {
        listHeader.map((header, index) => <span className={`caption ${hideHeaders.includes(index) ? 'hidden' : ''}`}>{header}</span>)
      }
    </header>

    {
      data.map(renderItem)
    }
  </ul>
);

FlatList.propTypes = {
  listHeader: PropTypes.arrayOf([PropTypes.string, PropTypes.element]).isRequired,
  hideHeaders: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default FlatList;
