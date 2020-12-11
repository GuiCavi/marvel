import PropTypes from 'prop-types';
import React from 'react';

import styles from './FlatList.module.sass';

const FlatList = ({
  isLoading, listHeader, data, renderItem, hideHeaders, ...props
}) => {
  if (isLoading) {
    return <span className="caption">Loading</span>;
  }

  return (
    <ul className={styles['flat-list']} {...props}>
      <header>
        {
          listHeader.map((header, index) => <span key={header} className={`caption ${hideHeaders.includes(index) ? 'hidden' : ''}`}>{header}</span>)
        }
      </header>

      {
        data.map(renderItem)
      }
    </ul>
  );
};

FlatList.propTypes = {
  isLoading: PropTypes.bool,
  listHeader: PropTypes.arrayOf(PropTypes.string).isRequired,
  hideHeaders: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

FlatList.defaultProps = {
  isLoading: false,
};

export default FlatList;
