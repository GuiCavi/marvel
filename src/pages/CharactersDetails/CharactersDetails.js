import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from '../../components';
import styles from './CharactersDetails.module.sass';

const CharactersDetails = () => {
  const location = useLocation();

  const { item: character } = location.state;

  return (
    <>
      <div className={styles['image-wrapper']}>
        <img src={character.image} alt={character.name} className={styles['character-image']} />
      </div>
      <main className="main-content" id={styles.details}>
        <Link to="/" className={styles['navigation-button']}>Voltar</Link>

        <img src={character.image} alt={character.name} className={styles['character-pfp']} />
        <h1>{character.name}</h1>

        <div className={styles.midias}>
          <div>
            <h2>Series</h2>
            {
              character.series.map((serie) => <MidiaItem key={serie}>{serie}</MidiaItem>)
            }
          </div>

          <div>
            <h2>Events</h2>
            {
              character.events.map((event) => <MidiaItem key={event}>{event}</MidiaItem>)
            }
          </div>
        </div>
      </main>
    </>
  );
};

const MidiaItem = ({ children }) => (
  <span className={styles['midia-item']}>{children}</span>
);

MidiaItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

MidiaItem.defaultProps = {
  children: undefined,
};

export default CharactersDetails;
