'use client';

import React, { useState } from 'react';
import styles from '../../styles/FilmSelectionList.module.css';
import filmData from '@/lib/filmData';

const FilmSelectionList: React.FC = () => {
  const [showBW, setShowBW] = useState(false);
  const [showColour, setShowColour] = useState(false);
  const [showIlford, setShowIlford] = useState(false);
  const [showKodakBW, setShowKodakBW] = useState(false);
  const [showFuji, setShowFuji] = useState(false);
  const [showKodakColour, setShowKodakColour] = useState(false);

  const toggleBW = () => setShowBW(!showBW);
  const toggleColour = () => setShowColour(!showColour);
  const toggleIlford = () => setShowIlford(!showIlford);
  const toggleKodakBW = () => setShowKodakBW(!showKodakBW);
  const toggleFuji = () => setShowFuji(!showFuji);
  const toggleKodakColour = () => setShowKodakColour(!showKodakColour);

  const formatFilmName = (filmPath: string) => {
    const parts = filmPath.split('/');
    const fileName = parts[parts.length - 1];
    return fileName.replace('.png', '').replace(/_/g, ' ');
  };

  return (
    <div className={styles.filmSelectionList}>
      <h2>Film Stocks</h2>
      <div className={styles.dropdown}>
        <div className={styles.dropdownHeader} onClick={toggleBW}>
          Black and White {showBW ? '▲' : '▼'}
        </div>
        {showBW && (
          <div className={styles.dropdownContent}>
            <div className={styles.brandHeader} onClick={toggleIlford}>
              Ilford {showIlford ? '▲' : '▼'}
            </div>
            {showIlford && filmData.bw.ilford.map((film, index) => (
              <div key={index} className={styles.filmItem}>{formatFilmName(film)}</div>
            ))}
            <div className={styles.brandHeader} onClick={toggleKodakBW}>
              Kodak {showKodakBW ? '▲' : '▼'}
            </div>
            {showKodakBW && filmData.bw.kodak_bw.map((film, index) => (
              <div key={index} className={styles.filmItem}>{formatFilmName(film)}</div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.dropdown}>
        <div className={styles.dropdownHeader} onClick={toggleColour}>
          Colour {showColour ? '▲' : '▼'}
        </div>
        {showColour && (
          <div className={styles.dropdownContent}>
            <div className={styles.brandHeader} onClick={toggleFuji}>
              Fujifilm {showFuji ? '▲' : '▼'}
            </div>
            {showFuji && filmData.colour.fuji.map((film, index) => (
              <div key={index} className={styles.filmItem}>{formatFilmName(film)}</div>
            ))}
            <div className={styles.brandHeader} onClick={toggleKodakColour}>
              Kodak {showKodakColour ? '▲' : '▼'}
            </div>
            {showKodakColour && filmData.colour.kodak.map((film, index) => (
              <div key={index} className={styles.filmItem}>{formatFilmName(film)}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmSelectionList;
