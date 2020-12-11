import React from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from '../../components';
import styles from './CharactersDetails.module.sass';

const CharactersDetails = () => {
  const location = useLocation();

  const { item: character } = location.state;

  return (
    <>
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'black',
      }}
      />
      <div className={styles['image-wrapper']}>
        <img src={character.image} alt={character.name} className={styles['character-image']} />
      </div>
      <main className="main-content" id={styles.details}>
        <div className={styles['navigation-button']}>
          <Link to="/">
            Voltar
          </Link>
        </div>

        <img src={character.image} alt={character.name} className={styles['character-pfp']} />
        <h1>{character.name}</h1>

        <div className={styles.midias}>
          <div>
            <h2>Series</h2>
            {
              character.series.length === 0
                ? <span>Nenhum registro.</span>
                : character.series.map((serie) => <span className={styles['midia-item']}>{serie}</span>)
            }
          </div>

          <div>
            <h2>Events</h2>
            {
              character.events.length === 0
                ? <span>Nenhum registro.</span>
                : character.events.map((event) => <span className={styles['midia-item']}>{event}</span>)
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default CharactersDetails;
