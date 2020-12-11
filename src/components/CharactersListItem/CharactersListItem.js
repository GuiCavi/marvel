import PropTypes from 'prop-types';
import React from 'react';

import styles from './CharactersListItem.module.sass';

const DISPLAY_N_EVENTS = 3;
const DISPLAY_N_SERIES = 3;

const CharactersListItem = ({ item }) => (
  <li className={styles['characters-list-item']}>
    <div className={`${styles.list} ${styles.character}`}>
      <img src={item.image} alt="" />
      <span className="bold">{item.name}</span>
    </div>

    <div className={`${styles.list} ${styles.series}`}>
      {
          item.series.slice(0, DISPLAY_N_EVENTS).map((serie) => <div key={serie}>{serie}</div>)
        }
    </div>

    <div className={`${styles.list} ${styles.events}`}>
      {
          item.events.slice(0, DISPLAY_N_SERIES).map((event) => <div key={event}>{event}</div>)
        }
    </div>
  </li>
);

CharactersListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    image: PropTypes.string,
    name: PropTypes.string,
    series: PropTypes.arrayOf(PropTypes.string),
    events: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CharactersListItem;
