'use client';

import React from 'react';
import PhotoSelector from '../components/PhotoSelector';
import styles from '../../styles/Results.module.css';

const ResultsPage: React.FC = () => {
  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.title}>Results</h1>
      <PhotoSelector />
    </div>
  );
};

export default ResultsPage;
