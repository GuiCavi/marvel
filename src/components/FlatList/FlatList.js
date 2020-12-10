import PropTypes from 'prop-types';
import React from 'react';

import './FlatList.module.sass';

const FlatList = ({
  listHeader, data, renderItem, ...props
}) => (
  <ul className="flat-list" {...props}>
    <header>
      {
        listHeader.map((header) => <span className="caption">{header}</span>)
      }
    </header>

    {
      data.map(renderItem)
    }
  </ul>
);

FlatList.propTypes = {
  listHeader: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default FlatList;
